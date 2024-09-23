import { createSlice } from '@reduxjs/toolkit';
import { getDocs, collection } from 'firebase/firestore';
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
    },
});

export const { setLoading, setData, setError, reserveRoom, clearReservation } = roomSlice.actions;

export const selectReservedRoom = (state) => state.room.reservedRoom;
export const selectLoading = (state) => state.room.loading;
export const selectError = (state) => state.room.error;
export const selectRoomsData = (state) => state.room.data;

export default roomSlice.reducer;

export const FetchData = () => async (dispatch) => {
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
