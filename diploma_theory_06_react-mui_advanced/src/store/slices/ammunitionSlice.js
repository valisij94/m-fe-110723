import { createSlice } from "@reduxjs/toolkit";


const ammunitionSlice = createSlice({
  name: 'ammunitions',
  initialState: {
    weapons: [
      {
        id: 1,
        name: 'Axe',
        description: 'Double axe. With him you are not afraid of any enemy!',
        weight: 9.5,
        category: 'melee'
      },
      {
        id: 2,
        name: 'Mitril Armour',
        description: 'A masterpiece of blacksmithing from Moria. Will protect you from an ax, arrow, and anything else',
        weight: 1.2,
        category: 'armour'
      },
      {
        id: 3,
        name: 'WarHammer',
        description: 'Not a game, not a tool - just a WAR HAMMER!',
        weight: 11.3,
        category: 'melee'
      },
      {
        id: 4,
        name: 'Orc Crossbow',
        description: 'Hard crossbow to deal with all types of armours',
        weight: 5.4,
        category: 'archery'
      },
      {
        id: 5,
        name: 'Elves Bow',
        description: 'Not the best choice if you are not an elve.. But you can try!',
        weight: 3.1,
        category: 'archery'
      },
      {
        id: 6,
        name: 'Spear',
        description: 'Nice choice to deal with enemies on the horses',
        weight: 7,
        category: 'melee'
      },
      {
        id: 7,
        name: 'Iron Shield',
        description: 'Should save your liver (bot it does not ensured...)',
        weight: 6.4,
        category: 'armour'
      }
    ],
    filters: {},
    sorting: {}
  },
  reducers: {
    applyFilters: (state, action) => {
      state.filters = action.payload;
    }
    /*
    applyFilters: (state, action) => ({
      ...state,
      filters: action.payload
    })
    */
  }
});

export const { applyFilters } = ammunitionSlice.actions;
export default ammunitionSlice.reducer;