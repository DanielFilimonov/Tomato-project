import { JSX, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useAppSelector } from "../../hooks/useTypeScriptHook";
import { selectCartProducts } from "../../pages/Cart/cartSlice";
import { selectActiveSection } from "../../store/activeSectionSlice";
import { assets } from "../../assets/assets";
import "./Navbar.css";

interface ILogginPopupProps {
	setShowLogin: (value: boolean) => void;
}

const Navbar = ({ setShowLogin }: ILogginPopupProps): JSX.Element => {
	const [isScrolled, setIsScrolled] = useState(false);

	const cart = useAppSelector(selectCartProducts);
	const { activeSection } = useAppSelector(selectActiveSection);

	const location = useLocation();
	const navigate = useNavigate();
	const hash = location.hash;
	const isAtHomePage = location.pathname === "/";

	const handleClick = () => {
		if (isAtHomePage) {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		} else {
			navigate("/");
		}
	};

	useEffect(() => {
		if (hash) {
			const element = document.querySelector(hash);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		}
	}, [hash]);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 80);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		if (isAtHomePage && activeSection) {
			const newHash = `#${activeSection}`;
			if (window.location.hash !== newHash) {
				window.history.replaceState(null, "", newHash);
			}
		}
	}, [activeSection, isAtHomePage]);

	const divDotClass = Object.keys(cart).length > 0 ? "dot" : "";

	return (
		<div className={`navbar-wrapper ${isScrolled ? "shadow" : ""}`}>
			<div className="app">
				<div className="navbar">
					<Link to="/">
						<img
							onClick={handleClick}
							src={assets.logo}
							alt=""
							className="logo"
						/>{" "}
					</Link>
					<ul className="navbar-menu">
						<li
							onClick={handleClick}
							className={`${
								isAtHomePage && activeSection === "home"
									? "active"
									: ""
							}`}
						>
							<Link to="/">home</Link>
						</li>
						<li
							className={`${
								isAtHomePage && activeSection === "menu"
									? "active"
									: ""
							}`}
						>
							<Link to="/#menu">menu</Link>
						</li>
						<li
							className={`${
								isAtHomePage && activeSection === "mobile-app"
									? "active"
									: ""
							}`}
						>
							<Link to="/#mobile-app">mobile-app</Link>
						</li>
						<li
							className={`${
								isAtHomePage && activeSection === "contact-us"
									? "active"
									: ""
							}`}
						>
							<Link to="/#contact-us">contact us</Link>
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
						<button onClick={() => setShowLogin(true)}>
							sign in
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
