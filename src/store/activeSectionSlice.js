import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	activeSection: "",
};

const activeSectionSlice = createSlice({
	name: "activeSection",
	initialState,
	reducers: {
    activeSectionSet: (state, action) => {
      state.activeSection = action.payload
    }
	},
});

const { actions, reducer } = activeSectionSlice;
export default reducer;

export const { activeSectionSet } = actions;