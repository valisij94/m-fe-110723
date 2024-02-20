import { participantActionTypes } from "../actions/participantsActions";


const initialState = {
  participants: []
};

export const participantsReducer = ( state = initialState, action ) => {

  switch (action.type) {

    case participantActionTypes.ADD_PARTICIPANT: {
      return {
        ...state,
        participants: [ ...state.participants, action.payload ]
      }
    }

    case participantActionTypes.DROP_PARTICIPANT: {
      return {
        ...state,
        participants: state.participants.filter( participant => participant.name !== action.paylod )
      }
    }

    default: return state;
  }
}