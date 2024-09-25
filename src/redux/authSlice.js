

import { createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase/config';




const initialState = {
  user: null,
  loading: false,
  error: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading(state) {
      state.loading = true;
      state.error = null;
    },
    setUser(state, action) {
      state.user = action.payload;
      state.loading = false;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    addBookingSuccess(state, action) {
            
      state.data.push(action.payload);
      state.loading = false;
  },

  },
});
export const { setLoading, setUser, setError,addBookingSuccess } = authSlice.actions;



export const signUp = ({ email, password, firstName, lastName }) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    try {
      const docRef = await addDoc(collection(db, "users"), {
       firstName: firstName,
        lastName: lastName,
        email: email,
      });
      console.log("Document written with ID: ", docRef.id);
      dispatch(setUser(userCredential.user));
    } catch (error) {
      
    }
   
  } catch (error) {
    console.log(error.message)
    dispatch(setError(error.message));
  }
};




export const signIn = ({ email, password }) => async (dispatch) => {
    dispatch(setLoading());
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      dispatch(setUser(userCredential.user));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };

 
 
export default authSlice.reducer;