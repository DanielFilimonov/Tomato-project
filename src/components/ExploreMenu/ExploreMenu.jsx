import { activeSectionSet } from "../../store/activeSectionSlice";
import { useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useSectionInView } from "../../hooks/useSectionInView";

import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
import { useSelector } from "react-redux";
import classNames from "classnames";
import { filterSet } from "./filtersSlice";

const ExploreMenu = () => {
	const { ref } = useSectionInView({ sectionName: "menu", threshold: 0.9 });
	  const dispatch = useDispatch();
	const { activeFilter } = useSelector((state) => state.filters);

	const rendermenuList = (menuDataArr) => (
		<div className="explore-menu-list">
			{menuDataArr.map((item, index) => {
				const imgClass = classNames({
					active: item.menu_name === activeFilter,
				});
				return (
					<div
						onClick={() => dispatch(filterSet(item.menu_name))}
						key={index}
						className="explore-menu-list-item"
					>
						<img
							className={imgClass}
							src={item.menu_image}
							alt=""
						/>
						<p>{item.menu_name}</p>
					</div>
				);
			})}
		</div>
	);

	return (
		<div className="explore-menu section" ref={ref} id="menu">
			<h1>Explore our menu</h1>
			<p className="explore-menu-text">
				Choose from a diverse menu featuring a delectable array of
				dishes. Our mission is to satisfy your cravings and elevate your
				dining experience, one delicious meal at a time.
			</p>
			{rendermenuList(menu_list)}
			<hr />
		</div>
	);
};

export default ExploreMenu;
