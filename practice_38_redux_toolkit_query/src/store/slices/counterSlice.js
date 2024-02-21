import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
  name: 'participantsCounter',
  initialState: 0,
  reducers: {
    incrementParticipants: state => {
      return state + 1;
    },
    decrementParticipants: state => state - 1
  }
});

export const { incrementParticipants, decrementParticipants } = counterSlice.actions;
export default counterSlice.reducer;