export const participantActionTypes = {
  INCREMENT_PARTICIPANT: 'PARTICIPANTS/INCREMENT_PARTICIPANT'
}

export const incrementParticipants = () => {
  return {
    type: participantActionTypes.INCREMENT_PARTICIPANT
  }
}