import { createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from 'firebase/auth';
import { auth, db } from '../firebase/config';
import { collection, addDoc, getDoc, doc , getDocs} from 'firebase/firestore';
import { async } from '@firebase/util';

const initialState = {
  user: null,
  loading: false,
  error: null,
  data: [],
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
    setSuccess(state,action){
      state.success = action.payload;
      
    }
  },
});
 
export const { setLoading, setUser, setError, addBookingSuccess, setSuccess } = authSlice.actions;


export const signUp = ({ email, password, firstName, lastName }) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await addDoc(collection(db, 'users'), {
      uid: userCredential.user.uid,
      firstName,
      lastName,
      email,
      password
    });
    dispatch(setUser({ ...userCredential.user, firstName, lastName, email }));
  } catch (error) {
    dispatch(setError(error.message));
  }
};


export const signIn = ({ email, password,}) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const userData = await getDoc(userCredential.user.uid);
    
    
    
    if (userData) {
      dispatch(setUser({ ...userCredential.user, ...userData }));
    } else {
      dispatch(setError('User data not found.'));
    }
  } catch (error) {
    dispatch(setError(error.message));
  }
};



export const getProfile = (uid) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const userDoc = await getDoc(doc(db, 'users', uid ));
    if (userDoc.exists()) {
      dispatch(setUser({ id: userDoc.id, ...userDoc.data() }));
    } else {
      dispatch(setError('User data not found.'));
    }
  } catch (error) {
    dispatch(setError(error.message));
  }
};


export const logout = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    await signOut(auth);
    dispatch(setUser(null)); 
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const resetPassword = ({ email }) => async (dispatch) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("jjjjjj")
    dispatch(setUser());
  } catch (error) {
    console.error("Error sending password reset email:", error.message);
  }
};

export const fetchUser = (uid) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const querySnapshot = await getDocs(collection(db, "users", uid, ));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    dispatch(setUser(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export default authSlice.reducer;
