import { createSlice } from '@reduxjs/toolkit';

export const auth = createSlice({
  name: 'auth',
  initialState: {
    token: '',
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token;
    },
    destroyToken: (state) => {
      state.token = '';
      state.fullName = '';
      state.email = '';
      state.profilePic = '';
    },
  },
});

export const { setToken, destroyToken } = authSlice.actions;

export default authSlice.reducer;
