import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

interface CartProduct {
	id: string;
	name: string;
	image: string;
	price: number;
	qnty: number;
}

interface CartState {
	[id: string]: CartProduct;
}

const initialState: CartState = {};

interface AddToCartPayload {
	id: string;
	name: string;
	image: string;
	price: number;
}

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
			const { id, name, image, price } = action.payload;

			if (!state[id]) {
				state[id] = { id, name, image, price, qnty: 1 };
			} else {
				state[id].qnty += 1;
			}
		},
		deleteInCart: (state, action: PayloadAction<string>) => {
			state[action.payload].qnty > 1
				? (state[action.payload].qnty -= 1)
				: delete state[action.payload];
		},
		removeFromCart: (state, action: PayloadAction<string>) => {
			delete state[action.payload];
		},
	},
});

const { actions, reducer } = cartSlice;

export const { addToCart, deleteInCart, removeFromCart } = actions;

export const selectCartProducts = (state: RootState) => state.cart;

export const selectTotalAmount = (state: RootState) => {
	const cart = state.cart;
	return cart
		? Object.values(cart).reduce((total, product) => {
				return total + product.price * product.qnty;
		  }, 0)
		: 0;
};

export default reducer;
