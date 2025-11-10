import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	activeSection: "",
};

const activeSectionSlice = createSlice({
	name: "activeSection",
	initialState,
	reducers: {
		activeSectionSet: (state, action) => {
			state.activeSection = action.payload;
		},
	},
});

const { actions, reducer } = activeSectionSlice;

export const { activeSectionSet } = actions;
export const selectActiveSection = (state) => state.activeSection;

export default reducer;
