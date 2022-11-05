import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import authSlice from './slices/authSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const auth = persistReducer(persistConfig, authSlice);

export const store = configureStore({
  reducer: {
    auth,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});

export const persistor = persistStore(store);
