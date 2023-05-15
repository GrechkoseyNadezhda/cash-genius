import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  categorySelected: "all",
  isSelected: false,
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
  },
});

export const { setCategory, setIsSelected } = categorySlice.actions;
export const categoryReducer = categorySlice.reducer;
