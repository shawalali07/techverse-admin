import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import authSlicereducer from './slices/authSlice';
import modalSlice from './slices/modalSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const authSlice = persistReducer(persistConfig, authSlicereducer);

export const store = configureStore({
  reducer: {
    authSlice,
    modalSlice,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});

export const persistor = persistStore(store);
