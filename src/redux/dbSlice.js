import { async } from '@firebase/util';
import { createSlice } from '@reduxjs/toolkit'
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase/config';

const initialState = {
  data : [],
  setLoading: false,
  setError: null
}

export const dataSlice = createSlice({
  name: 'db',
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
  },
});

// Action creators are generated for each case reducer function
export const { setLoading, setData, setError} = dataSlice.actions

export default dataSlice.reducer;

export const FetchData = () => async  (dispatch) => {
    dispatch(setLoading());
    try{
        const querySnapshot = await getDocs(collection(db, "Rooms"));
   
    const data = querySnapshot.docs.map((doc)=> ({
        id: doc.id,
        ...doc.data(),
    }));
    dispatch(setData(data));
    } catch (error) {
        dispatch(setError(error.message));
 }
};