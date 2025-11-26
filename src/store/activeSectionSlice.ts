import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface activeSectionState {
	activeSection: string;
}

const initialState: activeSectionState = {
	activeSection: "",
};

const activeSectionSlice = createSlice({
	name: "activeSection",
	initialState,
	reducers: {
		activeSectionSet: (state, action: PayloadAction<string>) => {
			state.activeSection = action.payload;
		},
	},
});

const { actions, reducer } = activeSectionSlice;

export const { activeSectionSet } = actions;
export const selectActiveSection = (state: RootState) => state.activeSection;

export default reducer;
