import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalCountItems: 0,
  items: [],
  isLoading: false,
  error: null,
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {},
});

export const shopReducer = shopSlice.reducer;
