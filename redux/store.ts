import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { modalStateReducer } from "./reducers/modal/reducer";

export const store = configureStore({
  reducer: {
    modal: modalStateReducer,
  },
  /* middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }) */
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;