import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const { id, name, image, price } = action.payload;

			if (!state[id]) {
				state[id] = { id, name, image, price, qnty: 1 };
			} else {
				state[id].qnty += 1;
			}
		},
		deleteInCart: (state, action) => {
			state[action.payload].qnty > 1
				? (state[action.payload].qnty -= 1)
				: delete state[action.payload];
		},
		removeFromCart: (state, action) => {
			delete state[action.payload];
		},
	},
});

const { actions, reducer } = cartSlice;

export const { addToCart, deleteInCart, removeFromCart } = actions;
export const selectCartProducts = (state) => state.cart;
export const selectTotalAmount = createSelector(
	[selectCartProducts],
	(cart) => {
		return cart
			? Object.values(cart).reduce((total, product) => {
					return total + product.price * product.qnty;
			  }, 0)
			: 0;
	}
);

export default reducer;
