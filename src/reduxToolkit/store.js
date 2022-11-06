import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import authSlicereducer from './slices/authSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const authSlice = persistReducer(persistConfig, authSlicereducer);

export const store = configureStore({
  reducer: {
    authSlice,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});

export const persistor = persistStore(store);
