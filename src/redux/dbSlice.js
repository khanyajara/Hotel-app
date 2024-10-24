import { createSlice } from '@reduxjs/toolkit';
import { getDocs, collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { getAuth } from 'firebase/auth';
import { async } from '@firebase/util';
import { Timestamp } from 'firebase/firestore';

const convertTimestamps = (data) => {
    return Object.keys(data).reduce((acc, key) => {
        if (data[key] instanceof Timestamp) {
            acc[key] = data[key].toDate(); 
        } else if (typeof data[key] === 'object' && data[key] !== null) {
            acc[key] = convertTimestamps(data[key]); 
        } else {
            acc[key] = data[key];
        }
        return acc;
    }, {});
};

const initialState = {
    data: [],
    loading: false,
    error: null,
    reservedRoom: null,
    bookings: [],
    likedRooms: [],
    reviews: [],
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
           state.likedRooms = action.payload;

        },
       
        addReviewSuccess(state, action) {
            state.reviews = action.payload; 
            state.loading = false;
        },

        setReviewsData(state, action) {
            state.reviews = action.payload
            state.loading = false;
        },
        addFavoriteToState(state, action) {
            state.favorites.push(action.payload);
            state.loading = false;
          },
          setFavorites(state, action) {
            state.favorites = action.payload; // Set the favorites to the payload
        },
        
    },
});

export const { 
    setLoading, 
    setData, 
    setError, 
    setBookings,
    setReviews,
    setReviewsData,
    addReviewSuccess,
    reserveRoom, 
    clearReservation, 
    addBookingSuccess, 
    addRoomSuccess,
    setLikedRooms,
    setBookingData ,
    addFavoriteToState,
    setFavorites
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

export const fetchClientBookings = (uid) => async (dispatch) => {
    dispatch(setLoading());
    try {
        const querySnapshot = await getDocs(collection(db, "Bookings", uid, "ClientBooks"));
        const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        dispatch(setBookingData(data));
    } catch (error) {
        dispatch(setError(error.message));
    }
};

export const userLikedRooms = (uid) => async (dispatch) => {
    dispatch(setLoading());
   try {
    const querySnapshot = await getDocs(collection(db, "users", uid, "LikedRooms"));
    const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        }));
        dispatch(setLikedRooms(data));

   } catch (error) {
    dispatch(setError(error.message));
   }
};



export const addLikedRoom = (uid, roomId) => async (dispatch) => {
    dispatch(setLoading());
    try {
        await addDoc(collection(db, "users", uid, "LikedRooms"), { roomId });

       
        dispatch(addFavoriteToState({ roomId }));
    } catch (error) {
        dispatch(setError(error.message));
    }
};
  

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
    dispatch(setLoading());
    try {
        const querySnapshot = await getDocs(collection(db, "users", uid, "Bookings"));
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

   

    dispatch(setLoading());
    try {
        const bookingRef = await addDoc(collection(db, "users", uid, "Bookings"), {
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

export const addReview = (reviewsData) => async (dispatch) => {
    dispatch(setLoading());
    try {
        const reviewRef = await addDoc(collection(db, "Reviews"), reviewsData);
        const convertedData = convertTimestamps({
            id: reviewRef.id,
            ...reviewsData,
        });
        dispatch(addReviewSuccess(convertedData));
    } catch (error) {
        console.error("Error adding review:", error);
        dispatch(setError(error.message));
    }
};

export const FetchReviews = () => async (dispatch) => {
    dispatch(setLoading());
    try {
        const reviewsCollection = collection(db, "Reviews");
        const reviewSnapshot = await getDocs(reviewsCollection);
        const reviewsList = reviewSnapshot.docs.map(doc => {
            const data = doc.data();
            return {
                id: doc.id,
                ...convertTimestamps(data), // Convert timestamps here
            };
        });

        dispatch(setReviewsData(reviewsList)); 
    } catch (error) {
        console.error("Error fetching reviews:", error);
        dispatch(setError(error.message));
    }
}

export const getFavorites = (uid) => async (dispatch) => {
    dispatch(setLoading());
    try {
      const globalQuerySnapshot = await getDocs(collection(db, "Favorites"));
      const globalFavorites = globalQuerySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const userQuerySnapshot = await getDocs(collection(db, "users", uid, "favorites"));
      const userFavorites = userQuerySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const combinedFavorites = [...globalFavorites, ...userFavorites];
      dispatch(setFavorites(combinedFavorites));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
 
  export const getUserFavorites = (uid) => async (dispatch) => {
    dispatch(setLoading());
    try {
      const querySnapshot = await getDocs(collection(db, "users", uid, "favorites"));
      const userFavorites = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      dispatch(setFavorites(userFavorites));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };

  export const addFavorite = (uid,roomId, Roomsdata,isFavorite) => async (dispatch) => {
    dispatch(setLoading());
    const favoriteData = {
        roomId,
        isFavorite,
        Roomsdata
    };

    try {
      const globalDocRef = await addDoc(collection(db, "Favorites"), favoriteData);
      console.log("Favorite added to global collection with ID: ", globalDocRef.id);
      const userDocRef = await addDoc(collection(db, "users", uid, "favorites"), favoriteData);
      console.log("Favorite added to user's collection with ID: ", userDocRef.id);
      dispatch(addFavoriteToState({
        globalId: globalDocRef.id,
        userId: userDocRef.id,
        ...favoriteData
      }));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };