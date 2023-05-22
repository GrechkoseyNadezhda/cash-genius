import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: localStorage.getItem("i18nextLng"),
  error: false,
  pending: false,
  modalMenuOpened: false,
  emptyResult: "",
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
      document.body.classList.add("modalOpen");
      state.modalMenuOpened = true;
    },
    closeModal(state) {
      document.body.classList.remove("modalOpen");
      state.modalMenuOpened = false;
    },
    setEmptyResult(state, { payload }) {
      state.emptyResult = payload;
    },
  },
});

export const {
  setLanguage,
  setError,
  setPending,
  openModal,
  closeModal,
  setEmptyResult,
} = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
