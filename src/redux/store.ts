// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import userDeatailReducer from './api/userDetailsSlice';


export const store = configureStore({
  reducer: {
    user: userReducer,
    users:userDeatailReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;