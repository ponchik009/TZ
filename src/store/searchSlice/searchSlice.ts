import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IFormData } from "../../pages/SearchPage/SearchPage";

export interface SearchState {
  from: string;
  to: string;
  dateStart: Date | null;
  dateEnd: Date | null;
}

const initialState: SearchState = {
  from: "",
  to: "",
  dateStart: null,
  dateEnd: null,
};

export const searchSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setSearchState: (state, action: PayloadAction<IFormData>) => {
      state.from = action.payload.from;
      state.to = action.payload.to;
      state.dateStart = new Date(action.payload.dateStart);
      state.dateEnd = action.payload.dateEnd
        ? new Date(action.payload.dateEnd)
        : null;
    },
    resetSearchState: (state) => {
      state.from = "";
      state.to = "";
      state.dateStart = null;
      state.dateEnd = null;
    },
  },
});

export const { setSearchState, resetSearchState } = searchSlice.actions;

export default searchSlice.reducer;
