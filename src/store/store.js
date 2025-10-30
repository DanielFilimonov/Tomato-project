import { configureStore } from "@reduxjs/toolkit";
import filters from '../components/ExploreMenu/filtersSlice'
import cart from '../pages/Cart/cartSlice'
const stringMiddleware = () => (next) => (action) => {
  if (typeof action === "string") {
    return next({
      type: action,
    });
  }

	return next(action);
}

const store = configureStore({
	reducer: { filters, cart },
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(stringMiddleware),
	devTools: process.env.NODE_ENV !== "production",
});

export default store;