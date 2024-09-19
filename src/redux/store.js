import { configureStore, combineReducers  } from '@reduxjs/toolkit'
import authReducer from "./authSlice"
import dataReducer from "./dbSlice"

export const  rootReducer = combineReducers({
    auth: authReducer,
    data: dataReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})