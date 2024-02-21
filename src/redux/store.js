import { contactsReducer } from "./contactsSlice";
import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filtersSlice";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

// let store = createStore(persistedReducer);
// let persistor = persistStore(store);
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistedStore = persistStore(store);
