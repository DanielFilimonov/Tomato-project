import { configureStore } from "@reduxjs/toolkit";

import filters from '../components/ExploreMenu/filtersSlice'
import cart from '../pages/Cart/cartSlice'
import activeSection from './activeSectionSlice'

const store = configureStore({
	reducer: { filters, cart, activeSection },
	devTools: process.env.NODE_ENV !== "production",
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
