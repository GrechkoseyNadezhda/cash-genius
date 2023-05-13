import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: "ua",
  error: null,
  pending: true,
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
      document.body.classList.add("modalOpen");
      state.modalMenuOpened = true;
    },
    closeModal(state) {
      document.body.classList.remove("modalOpen");
      state.modalMenuOpened = false;
    },
  },
});

export const { setLanguage, setError, setPending, openModal, closeModal } =
  globalSlice.actions;
export const globalReducer = globalSlice.reducer;
