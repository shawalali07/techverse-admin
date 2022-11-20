import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    users: [],
    knowledge: [],
    answers: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setKnowledge: (state, action) => {
      state.knowledge = action.payload;
    },
    setAnswers: (state, action) => {
      state.answers = action.payload;
    },
  },
});

export const { setUsers, setKnowledge, setAnswers } = userSlice.actions;

export default userSlice.reducer;
