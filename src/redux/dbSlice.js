import { async } from '@firebase/util';
import { createSlice } from '@reduxjs/toolkit';
import { getDocs, collection, addDoc, getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/config';

const initialState = {
    data: [],
    loading: false,
    error: null,
    reservedRoom: null,
    bookings: [], 
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
        setBookingData(state, action) { // Add this reducer
            state.bookings = action.payload; // Update bookings state
            state.loading = false;
        },
    },
});

export const { 
    setLoading, 
    setData, 
    setError, 
    reserveRoom, 
    clearReservation, 
    addBookingSuccess, 
    addRoomSuccess,
    setBookingData 
} = roomSlice.actions;

export const selectReservedRoom = (state) => state.room.reservedRoom;
export const selectLoading = (state) => state.room.loading;
export const selectError = (state) => state.room.error;
export const selectData = (state) => state.room.data;
export const selectBookingsData = (state) => state.room.bookings; 

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

export const fetchBookings = (uid) => async (dispatch) => {
    dispatch(setLoading());
    try {
        const querySnapshot = await getDocs(collection(db,"users",uid , "Bookings"));
        const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        dispatch(setBookingData(data)); 
    } catch (error) {
        dispatch(setError(error.message));
    }
};

export const addBookings = (uid,bookingData) => async (dispatch) => {
    dispatch(setLoading());
    try {
        const docRef = await addDoc(collection(db,"users",uid, "Bookings"), bookingData);
        console.log("Document written with ID: ", docRef.id);
        
        
        dispatch(addBookingSuccess({ id: docRef.id, ...bookingData }));
    } catch (error) {
        dispatch(setError(error.message));
    }
};
export const addRooms = (Roomsdata) => async (dispatch)=>{
    dispatch(setLoading());
    try {
        const docRef = await addDoc(collection(db, "Rooms"), Roomsdata);
        console.log("Document written with ID: ", docRef.id);
        
        dispatch(addRoomSuccess({ id: docRef.id, ...Roomsdata }));
        } catch (error) {
            dispatch(setError(error.message));
            
    }
};
