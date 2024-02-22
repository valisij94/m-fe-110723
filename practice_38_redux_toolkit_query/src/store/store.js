import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import participantsReducer from './slices/participantsSlice';
import { apiSlice } from './slices/apiSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    participants: participantsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(apiSlice.middleware)
});