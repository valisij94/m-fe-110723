
import { createStore, combineReducers } from 'redux';
import { participantsReducer } from './reducers/participantsReducer';

export const store = createStore(
  combineReducers({
    participants: participantsReducer
  })
);