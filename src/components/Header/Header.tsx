import React from "react";
import { Link } from "react-router-dom";

import { useSectionInView } from "../../hooks/useSectionInView";
import "./Header.css";

const Header: React.FC = () => {
	const { ref } = useSectionInView({
		sectionName: "home",
		threshold: 0.8,
		rootMargin: "-10% 0px 0px 0px",
	});

	return (
		<div className="header" ref={ref} id="home">
			<div className="header-contents">
				<h2>Order your favorite food here</h2>
				<p>
					Choose from a diverse menu featuring a delectable array of
					dishes crafted with the finest ingredients and culinary
					expertise. Our mission is to satisfy your cravings and
					elevate your dining experience, one delicious meal at a
					time.
				</p>
				<Link to="/#menu">View menu</Link>
			</div>
		</div>
	);
};

export default Header;
