import { activeSectionSet } from "../../store/activeSectionSlice";
import { useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import "./Header.css";

const Header = () => {
	const { ref, inView } = useInView({ threshold: 0.8 });
	const dispatch = useDispatch();

	useEffect(() => {
		if (inView) {
			dispatch(activeSectionSet("home"));
		}
	}, [inView]);

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
