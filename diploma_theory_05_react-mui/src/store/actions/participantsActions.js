export const participantActionTypes = {
  INCREMENT_PARTICIPANT: 'PARTICIPANTS/INCREMENT_PARTICIPANT',
  ADD_PARTICIPANT: 'PARTICIPANTS/ADD_PARTICIPANT',
  DROP_PARTICIPANT: 'PARTICIPANTS/DROP_PARTICIPANT'
}

export const incrementParticipants = () => {
  return {
    type: participantActionTypes.INCREMENT_PARTICIPANT
  }
}

export const addParticipant = (participantData) => {
  return {
    type: participantActionTypes.ADD_PARTICIPANT,
    payload: participantData
  }
}

export const dropParticipant = (participantName) => {
  return {
    type: participantActionTypes.DROP_PARTICIPANT,
    payload: participantName
  }
}