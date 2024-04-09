'use client'
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage';

// Import your reducers
import { authReducer } from "@/redux/reducer/index";
// "@/redux/reducer/index"
const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['auth'] // only 'auth' state will be persisted
};

const authPersistConfig = {
  key: "auth",
  storage,
};

const rootReducers = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER
      ],
    },
  }),
});
export type RootState = ReturnType<typeof rootReducers>;

export let persistor = persistStore(store);
