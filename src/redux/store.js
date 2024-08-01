import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from "redux-persist";
import authReducer from '../redux/auth/slice';
import contactsReducer from './contacts/slice';
import filtersReducer from '../redux/filters/slice'
import storage from 'redux-persist/lib/storage';

const persistedAuthReducer = persistReducer(
    {
      key: "authToken",
      storage,
      whitelist: ["token"],
    },
    authReducer
  );

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filtersReducer,
        auth: persistedAuthReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
});

export const persistor = persistStore(store);
