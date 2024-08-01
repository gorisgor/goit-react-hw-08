import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    filter: "",
  },
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export default filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;