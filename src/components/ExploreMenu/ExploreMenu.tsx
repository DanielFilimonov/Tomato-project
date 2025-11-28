import React from "react";
import classNames from "classnames";

import { useSectionInView } from "../../hooks/useSectionInView";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypeScriptHook";
import { filterSet, selectFilters } from "./filtersSlice";
import { menu_list } from "../../assets/assets";

import "./ExploreMenu.css";

interface IMenuItem {
	menu_name: string;
	menu_image: string;
}

const ExploreMenu: React.FC = () => {
	const { ref } = useSectionInView({ sectionName: "menu", threshold: 0.9 });
	const dispatch = useAppDispatch();
	const { activeFilter } = useAppSelector(selectFilters);

	const rendermenuList = () => (
		<div className="explore-menu-list">
			{menu_list.map((item: IMenuItem, index) => {
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
							alt={item.menu_name}
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
			{rendermenuList()}
			<hr />
		</div>
	);
};

export default ExploreMenu;
