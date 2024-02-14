import { participantActionTypes } from "../actions/participantsActions";


const initialState = 0;

export const participantsReducer = ( state = initialState, action ) => {

  switch (action.type) {
    case participantActionTypes.INCREMENT_PARTICIPANT: {
      return state + 1;
    }
    default: return state;
  }
}