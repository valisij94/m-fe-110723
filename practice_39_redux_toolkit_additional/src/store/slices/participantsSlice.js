import { createSlice } from "@reduxjs/toolkit";

/*
 participants = [
  {
    dwarfName: 'Balin',
    email: '',
    weapons: [
      {
        name: 'Sword',
        weight: 12
      }
    ]
  }
 ]
*/

const participantsSlice = createSlice({
  name: 'participants',
  initialState: [],
  reducers: {
    addParticipant: (state, action) => {
      state.push(action.payload);
    },
    dropParticipant: (state, action) => {
      return state.filter( participant => participant.dwarfName !== action.payload)
    },
    addWeapon: (state, action) => {
      // action.payload.weapon, action.payload.dwarfName
      const currentDwarf = state.find( dwarf => dwarf.dwarfName === action.payload.dwarfName );
      if (currentDwarf) {
        if (!currentDwarf.weapons) {
          currentDwarf.weapons = [];
        }
        currentDwarf.weapons.push(action.payload.weapon);
      }
    }
  }
});

export const { addParticipant, dropParticipant, addWeapon } = participantsSlice.actions;
export default participantsSlice.reducer;