import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import participantsReducer from './slices/participantsSlice';
import ammunitionsReducer from './slices/ammunitionSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    participants: participantsReducer,
    ammunitions: ammunitionsReducer
  }
});