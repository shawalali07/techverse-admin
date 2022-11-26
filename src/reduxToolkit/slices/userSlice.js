import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    users: [],
    knowledge: [],
    answers: [],
    usersChart: [],
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
    setUsersChart: (state, action) => {
      state.usersChart = action.payload;
    },
  },
});

export const { setUsers, setKnowledge, setAnswers, setUsersChart } =
  userSlice.actions;

export default userSlice.reducer;
