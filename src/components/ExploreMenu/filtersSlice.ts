import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";

interface IFiltersState {
	activeFilter: string;
}

const initialState: IFiltersState = {
	activeFilter: "all",
};

const filtersSlice = createSlice({
	name: "filters",
	initialState,
	reducers: {
		filterSet: (state, action: PayloadAction<string>) => {
			if (state.activeFilter === action.payload) {
				state.activeFilter = "all";
			} else {
				state.activeFilter = action.payload;
			}
		},
	},
});

const { actions, reducer } = filtersSlice;

export const selectFilters = (state: RootState) => state.filters
export const { filterSet } = actions;

export default reducer;
