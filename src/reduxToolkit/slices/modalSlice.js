import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modalSlice',
  initialState: {
    languageModal: false,
    skillModal: false,
    snippetModal: false,
    snippetViewModal: false,
  },
  reducers: {
    setLanguageModal: (state, action) => {
      state.languageModal = action.payload;
    },
    setSkillModal: (state, action) => {
      state.skillModal = action.payload;
    },
    setSnippetModal: (state, action) => {
      state.snippetModal = action.payload;
    },
    setSnippetViewModal: (state, action) => {
      state.snippetViewModal = action.payload;
    },
  },
});

export const {
  setLanguageModal,
  setSkillModal,
  setSnippetModal,
  setSnippetViewModal,
} = modalSlice.actions;

export default modalSlice.reducer;
