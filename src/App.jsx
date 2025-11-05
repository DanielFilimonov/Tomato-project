import Footer from "./components/Footer/Footer";
import LogginPopup from "./components/LogginPopup/LogginPopup";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";

import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

const App = () => {
	const [showLogin, setShowLogin] = useState(false);
	// const [activeSection, setActiveSection] = useState("menu");

  //   const { hash } = useLocation();

	
	// useEffect(() => {
	// 	const sections = document.querySelectorAll(".section");

	// 	const observer = new IntersectionObserver(
	// 		(entries) => {
	// 			entries.forEach((entry) => {
  //                   if (entry.isIntersecting) {
  //                       const newSection = entry.target.id;
  //                       setActiveSection(newSection);
                        
  //                       const newHash = `#${newSection}`;
                        
	// 					if (window.location.hash !== newHash) {
	// 						window.history.replaceState(null, "", newHash);
	// 					}
	// 				}
	// 			});
	// 		},
	// 		{
	// 			threshold: 0.8,
	// 			// rootMargin: "-40px 0px 0px 0px",
	// 		}
	// 	);

	// 	sections.forEach((section) => observer.observe(section));
	// }, [hash]);

	return (
		<>
			{showLogin ? <LogginPopup setShowLogin={setShowLogin} /> : <></>}
			<div className="app">
				<Navbar
					setShowLogin={setShowLogin}
					// activeSection={activeSection}
				/>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</div>
			<Footer />
		</>
	);
};

export default App;

