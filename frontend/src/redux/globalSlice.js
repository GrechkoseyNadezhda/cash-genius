import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: "ua",
  error: null,
  pending: false,
  modalMenuOpened: false,
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
    openModal(state) {
      state.modalMenuOpened = true;
    },
    closeModal(state) {
      state.modalMenuOpened = false;
    },
  },
});

export const { setLanguage, setError, setPending, openModal, closeModal } =
  globalSlice.actions;
export const globalReducer = globalSlice.reducer;
