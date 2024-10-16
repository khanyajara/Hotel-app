import { async } from '@firebase/util';
import { createSlice } from '@reduxjs/toolkit';
import { getDocs, collection, addDoc, doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import {auth} from "../firebase/config"
import { getAuth } from 'firebase/auth';

const initialState = {
    data: [],
    loading: false,
    error: null,
    reservedRoom: null,
    bookings: [],
    likedRooms: {},
};

const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        setLoading(state) {
            state.loading = true;
            state.error = null;
        },
        setData(state, action) {
            state.data = action.payload;
            state.loading = false;
        },
        setError(state, action) {
            state.error = action.payload;
            state.loading = false;
        },
        reserveRoom(state, action) {
            state.reservedRoom = action.payload;
        },
        clearReservation(state) {
            state.reservedRoom = null;
        },
        addBookingSuccess(state, action) {
            state.bookings.push(action.payload);
            state.loading = false;
        },
        addRoomSuccess(state, action) {
            state.data.push(action.payload);
            state.loading = false;
        },
        setBookingData(state, action) {
            state.bookings = action.payload;
            state.loading = false;
        },

        setBookings(state, action) {
            state.bookings = action.payload;
            state.loading = false;
          },
        setLikedRooms(state, action) {
            const { userId, roomId } = action.payload;
            if (!state.likedRooms[userId]) {
                state.likedRooms[userId] = [];
            }
            state.likedRooms[userId] = state.likedRooms[userId].includes(roomId)
                ? state.likedRooms[userId].filter(id => id !== roomId) // Unliking
                : [...state.likedRooms[userId], roomId]; // Liking
        },
    },
});

export const { 
    setLoading, 
    setData, 
    setError, 
    setBookings,
    reserveRoom, 
    clearReservation, 
    addBookingSuccess, 
    addRoomSuccess,
    setLikedRooms,
    setBookingData 
} = roomSlice.actions;

export const selectReservedRoom = (state) => state.room.reservedRoom;
export const selectLoading = (state) => state.room.loading;
export const selectError = (state) => state.room.error;
export const selectData = (state) => state.room.data;
export const selectBookingsData = (state) => state.room.bookings; 
export const selectLikedRooms = (state, userId) => state.room.likedRooms[userId] || []; // Selector for liked rooms by user

export default roomSlice.reducer;

export const fetchData = () => async (dispatch) => {
    dispatch(setLoading());
    try {
        const querySnapshot = await getDocs(collection(db, "Rooms"));
        const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        dispatch(setData(data));
    } catch (error) {
        dispatch(setError(error.message));
    }
};

export const fetchBookings = () => async (dispatch) => {
    dispatch(setLoading());
    try {
        const querySnapshot = await getDocs(collection(db, "Bookings"));
        const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        dispatch(setBookingData(data)); 
    } catch (error) {
        dispatch(setError(error.message));
    }
};

export const addBookings = (uid, bookingData) => async (dispatch) => {
    dispatch(setLoading());
    try {
        const docRef = await addDoc(collection(db, "users", uid, "Bookings"), bookingData);
        dispatch(addBookingSuccess({ id: docRef.id, ...bookingData }));
    } catch (error) {
        dispatch(setError(error.message));
    }
};

export const addRooms = (Roomsdata) => async (dispatch) => {
    dispatch(setLoading());
    try {
        const docRef = await addDoc(collection(db, "Rooms"), Roomsdata);
        dispatch(addRoomSuccess({ id: docRef.id, ...Roomsdata }));
    } catch (error) {
        dispatch(setError(error.message));
    }
};

export const fetchClientBookings = (email) => async (dispatch) => {
    dispatch(setLoading());
    try {
        const querySnapshot = await getDocs(collection(db, "Bookings", email, "ClientBooks"));
        const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        dispatch(setBookingData(data));
    } catch (error) {
        dispatch(setError(error.message));
    }
};

export const userLikedRooms = (roomData) => async (dispatch) => {
    dispatch(setLoading());
    try {
        const querySnapshot = await getDocs(collection(db, "Rooms", roomData.id, "LikedRooms"));
        const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        dispatch(setLikedRooms(data));
    } catch (error) {
        console.log(error);
    }
};

export const addLikedRoom = (uid, userId, roomData) => async (dispatch) => {
    dispatch(setLoading());
    const auth = getAuth();
    const currentUser = auth.currentUser;



    if (!currentUser) {
        console.error("User is not authenticated");
        return; // Exit if user is not authenticated
    }

    const uid = currentUser.uid; // Get the current user's UID

    dispatch(setLoading());
    try {
        const likedRoomRef = await addDoc(collection(db, "users", uid, "LikedRooms"), {
            userId,
            ...roomData 
        });
        
        
        dispatch(setLikedRooms({ userId, uid, docId: likedRoomRef.id }));
    } catch (error) {
        console.error("Error adding liked room:", error);
    }
};;

export const addReservations = (uid, bookingData) => async (dispatch) => {
    dispatch(setLoading());
    try {
        const docRef = await addDoc(collection(db, "users", uid, "Bookings"), bookingData);
        dispatch(addBookingSuccess({ id: docRef.id, ...bookingData }));
    } catch (error) {
        dispatch(setError(error.message));
    }
};


export const FetchUserBookings = (uid) => async (dispatch) => {

    console.log(auth)
    dispatch(setLoading());
    try {
        const querySnapshot = await getDocs(collection(auth, "users", uid, "Bookings"));
        const bookingsData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        dispatch(setBookings(bookingsData));
    } catch (error) {
        dispatch(setError(error.message));
    }
};

export const addBookingToFirestore = (uid, roomId, bookingData) => async (dispatch) => {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (!currentUser) {
        console.error("User is not authenticated");
        return; 
    }

    const uid = currentUser.uid; 

    dispatch(setLoading());
    try {
        const bookingRef = await addDoc(collection(db, "users", uid, "UserBookings"), {
            roomId,
            ...bookingData 
        });

        dispatch(setBookings({ roomId, uid, docId: bookingRef.id }));
    } catch (error) {
        console.error("Error adding booking:", error);
        
    } finally {
        dispatch(setLoading(false));
    }
};

