import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import authSlicereducer from './slices/authSlice';
import modalSlice from './slices/modalSlice';
import languageSlice from './slices/languageSlice';
import snippetSlice from './slices/snippet';
import userSlice from './slices/userSlice';
const persistConfig = {
  key: 'root',
  storage,
};

const authSlice = persistReducer(persistConfig, authSlicereducer);

export const store = configureStore({
  reducer: {
    authSlice,
    modalSlice,
    languageSlice,
    snippetSlice,
    userSlice,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});

export const persistor = persistStore(store);
