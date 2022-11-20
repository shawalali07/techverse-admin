import { createSlice } from '@reduxjs/toolkit';

export const snippetSlice = createSlice({
  name: 'snippetSlice',
  initialState: {
    snippets: [],
  },
  reducers: {
    setSnippets: (state, action) => {
      state.snippets = action.payload;
    },
  },
});

export const { setSnippets } = snippetSlice.actions;

export default snippetSlice.reducer;
