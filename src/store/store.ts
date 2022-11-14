import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice/searchSlice";

export const store = configureStore({
  reducer: {
    search: searchSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
