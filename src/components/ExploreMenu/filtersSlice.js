import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: [],
  activeFilter: 'All'
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    filterSet: (state, action) => {
      state.activeFilter = action.payload
    }
  }
})

const { actions, reducer } = filtersSlice;
export default reducer;

export const { filterSet } = actions;