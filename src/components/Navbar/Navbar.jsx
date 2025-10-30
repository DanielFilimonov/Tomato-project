import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import "./Navbar.css";

const Navbar = () => {
	const [menu, setMenu] = useState("home");
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
						onClick={() => setMenu("home")}
						className={menu === "home" ? "active" : ""}
					>
						home
					</li>
				</Link>
				<li
					onClick={() => setMenu("menu")}
					className={menu === "menu" ? "active" : ""}
				>
					menu
				</li>
				<li
					onClick={() => setMenu("mobile-app")}
					className={menu === "mobile-app" ? "active" : ""}
				>
					mobile-app
				</li>
				<li
					onClick={() => setMenu("contact-us")}
					className={menu === "contact-us" ? "active" : ""}
				>
					cntact us
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
				<button>sign in</button>
			</div>
		</div>
	);
};

export default Navbar;
