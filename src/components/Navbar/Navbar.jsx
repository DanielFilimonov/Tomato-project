import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../../assets/assets";
import "./Navbar.css";

const Navbar = ({ setShowLogin, activeSection }) => {
	const cart = useSelector((state) => state.cart);

	const location = useLocation();
	const hash = location.hash;
	const isAtHomePage = location.pathname === "/";

	useEffect(() => {
		if (hash) {
			const element = document.querySelector(hash);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		}
	}, [hash]);

	const divDotClass = Object.keys(cart).length > 0 ? "dot" : "";

	return (
		<div className="navbar">
			<Link to="/">
				<img src={assets.logo} alt="" className="logo" />{" "}
			</Link>
			<ul className="navbar-menu">
				<li
					className={`${
						isAtHomePage && activeSection === "home" ? "active" : ""
					}`}
				>
					<Link to="/#home">Home</Link>
				</li>
				<li
					className={`${
						isAtHomePage && activeSection === "menu" ? "active" : ""
					}`}
				>
					<Link to="/#menu">Menu</Link>
				</li>
				<li
					className={`${
						isAtHomePage && activeSection === "mobile-app"
							? "active"
							: ""
					}`}
				>
					<Link to="/#mobile-app">Downoad App</Link>
				</li>
				<li
					className={`${
						isAtHomePage && activeSection === "contact-us"
							? "active"
							: ""
					}`}
				>
					<Link to="/#contact-us">Contact Us</Link>
				</li>
			</ul>
			<div className="navbar-right">
				<img src={assets.search_icon} alt="" />
				<div className="navbar-search-icon">
					<Link to="/cart">
						<img src={assets.basket_icon} alt="" />
					</Link>
					<div className={divDotClass}></div>
				</div>
				<button onClick={() => setShowLogin(true)}>sign in</button>
			</div>
		</div>
	);
};

export default Navbar;
