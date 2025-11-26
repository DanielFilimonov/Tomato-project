import React from "react";

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
				<button>View Menu</button>
			</div>
		</div>
	);
};

export default Header;
