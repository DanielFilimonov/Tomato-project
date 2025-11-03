import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import "./Navbar.css";

const Navbar = ({ setShowLogin, activeSection }) => {

	const cart = useSelector((state) => state.cart);

	const divDotClass = Object.keys(cart).length > 0 ? "dot" : "";

	return (
		<div className="navbar">
			<Link to="/">
				<img src={assets.logo} alt="" className="logo" />{" "}
			</Link>
			<ul className="navbar-menu">
				<Link to="/">
					<li
						className={`menu-item ${
							activeSection === "home" ? "actigte" : ""
						}`}
					>
						<a className="menu-item-link" href="#home">
							home
						</a>
					</li>
				</Link>
				<li
					className={`menu-item ${
						activeSection === "menu" ? "active" : ""
					}`}
				>
					<a className="menu-item-link" href="#menu">
						menu
					</a>
				</li>
				<li
					className={`menu-item ${
						activeSection === "mobile-app" ? "active" : ""
					}`}
				>
					<a className="menu-item-link" href="#mobile-app">
						mobile-app
					</a>
				</li>
				<li
					className={`menu-item ${
						activeSection === "contact-us" ? "active" : ""
					}`}
				>
					<a className="menu-item-link" href="#contact-us">
						contact us
					</a>
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
