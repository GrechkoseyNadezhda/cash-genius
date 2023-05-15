import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  categorySelected: "all",
  isSelected: false,
  currentPage: 1,
  morePages: false,
};

const categorySlice = createSlice({
  name: "categorySelected",
  initialState,
  reducers: {
    setCategory(state, { payload }) {
      state.categorySelected = payload;
    },
    setIsSelected(state, { payload }) {
      state.isSelected = payload;
    },
    setCurrentPage(state) {
      state.currentPage += 1;
    },
  },
});

export const { setCategory, setIsSelected, setCurrentPage } =
  categorySlice.actions;
export const categoryReducer = categorySlice.reducer;
