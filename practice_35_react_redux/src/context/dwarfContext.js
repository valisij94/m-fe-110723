import React, {createContext} from 'react';

export const DwarfContext = createContext({
  participants: [],
  addParticipant: () => {}
});