import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import chatsSlice from './chatsSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    chat: chatsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
