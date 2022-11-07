import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modalSlice',
  initialState: {
    languageModal: false,
    skillModal: false,
  },
  reducers: {
    setLanguageModal: (state, action) => {
      state.languageModal = action.payload;
    },
    setSkillModal: (state, action) => {
      state.skillModal = action.payload;
    },
  },
});

export const { setLanguageModal, setSkillModal } = modalSlice.actions;

export default modalSlice.reducer;
