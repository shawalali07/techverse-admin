import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'authSlice',
  initialState: {
    user: {},
  },
  reducers: {
    setToken: (state, action) => {
      state.user = action.payload;
    },
    destroyToken: (state) => {
      state.user = {};
    },
  },
});

export const { setToken, destroyToken } = authSlice.actions;

export default authSlice.reducer;
