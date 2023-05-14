import { configureStore } from "@reduxjs/toolkit";
import { categoryReducer } from "./categorySlice";
import { globalReducer } from "./globalSlice";

export const store = configureStore({
  reducer: {
    global: globalReducer,
    categorySelected: categoryReducer,
  },
});
