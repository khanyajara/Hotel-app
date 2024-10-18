import { createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from 'firebase/auth';
import { auth, db } from '../firebase/config';
import { collection, addDoc, getDoc, doc } from 'firebase/firestore';

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
    },
});

export const { setLoading, setUser, setError } = authSlice.actions;

export const signUp = ({ email, password, firstName, lastName }) => async (dispatch) => {
    dispatch(setLoading());
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await addDoc(collection(db, 'users'), {
            firstName,
            lastName,
            email,
        });
        dispatch(setUser({ ...userCredential.user, firstName, lastName, email }));
    } catch (error) {
        dispatch(setError(error.message));
    }
};

export const signIn = ({ email, password }) => async (dispatch) => {
    dispatch(setLoading());
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const userDoc = await getDoc(doc(db, "users", userCredential.user.uid));

        if (userDoc.exists()) {
            dispatch(setUser({ ...userCredential.user, ...userDoc.data() }));
            localStorage.setItem('user', JSON.stringify({ ...userCredential.user, ...userDoc.data() }));
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
        const userDoc = await getDoc(doc(db, 'users', uid));
        if (userDoc.exists()) {
            const userData = userDoc.data();
            dispatch(setUser({ ...userData, uid }));
        } else {
            dispatch(setError('User not found'));
        }
    } catch (error) {
        dispatch(setError(error.message));
    }
};

export const logout = () => async (dispatch) => {
    dispatch(setLoading());
    try {
        await signOut(auth);
        localStorage.removeItem('user'); // Clear user data
        dispatch(setUser(null));
    } catch (error) {
        dispatch(setError(error.message));
    }
};

export const resetPassword = ({ email }) => async (dispatch) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset email sent.");
    } catch (error) {
        console.error("Error sending password reset email:", error.message);
    }
};

export const fetchUser = (uid) => async (dispatch) => {
    dispatch(setLoading());
    try {
        const userDoc = await getDoc(doc(db, "users", uid));
        if (userDoc.exists()) {
            dispatch(setUser({ uid, ...userDoc.data() }));
        } else {
            dispatch(setError('User not found'));
        }
    } catch (error) {
        dispatch(setError(error.message));
    }
};

export default authSlice.reducer;
