import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: "ua",
  error: null,
  pending: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setLanguage(state, { payload }) {
      state.lang = payload;
    },
    setError(state, { payload }) {
      state.error = payload;
    },
    setPending(state, { payload }) {
      state.pending = payload;
    },
  },
});

export const { setLanguage, setError, setPending } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
