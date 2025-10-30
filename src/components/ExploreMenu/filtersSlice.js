import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	activeFilter: "all",
};

const filtersSlice = createSlice({
	name: "filters",
	initialState,
	reducers: {
		filterSet: (state, action) => {
			if (state.activeFilter === action.payload) {
				state.activeFilter = "all";
			} else {
				state.activeFilter = action.payload;
			}
		},
	},
});

const { actions, reducer } = filtersSlice;
export default reducer;

export const { filterSet } = actions;
