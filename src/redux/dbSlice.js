import { createSlice } from '@reduxjs/toolkit';
import { getDocs, collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const initialState = {
    data: [],
    loading: false,
    error: null,
    reservedRoom: null,
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
            state.data.push(action.payload);
            state.loading = false;
        },
        addRoomSuccess(state, action) {
            state.data.push(action.payload);
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
    addRoomSuccess 
} = roomSlice.actions;

export const selectReservedRoom = (state) => state.room.reservedRoom;
export const selectLoading = (state) => state.room.loading;
export const selectError = (state) => state.room.error;
export const selectRoomsData = (state) => state.room.data;

export default roomSlice.reducer;

// Fetching data from Firestore
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

// Adding bookings to Firestore
export const addBookings = (bookingData) => async (dispatch) => {
    dispatch(setLoading());
    try {
        const docRef = await addDoc(collection(db, "Bookings"), bookingData);
        console.log("Document written with ID: ", docRef.id);
        
        // Update the state locally with the new booking
        dispatch(addBookingSuccess({ id: docRef.id, ...bookingData }));
    } catch (error) {
        dispatch(setError(error.message));
    }
};
