import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import LogginPopup from "./components/LogginPopup/LogginPopup";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import ScrollToTop from "./components/utils/ScrollToTop";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";

const App: React.FC = () => {
	const [showLogin, setShowLogin] = useState(false);

	return (
		<>
			<ScrollToTop />
			{showLogin ? <LogginPopup setShowLogin={setShowLogin} /> : <></>}
			<Navbar setShowLogin={setShowLogin} />
			<main className="app">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/order" element={<PlaceOrder />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
};

export default App;
