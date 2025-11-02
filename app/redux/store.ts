// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { uiReducer, userReducer } from './features/uiSlice';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;