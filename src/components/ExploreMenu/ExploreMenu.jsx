import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
import { useDispatch, useSelector } from "react-redux";

import { filterSet } from "./filtersSlice";

const ExploreMenu = () => {
	const dispatch = useDispatch();
	const { activeFilter } = useSelector((state) => state.filters);
	return (
		<div className="explore-menu" id="explore-menu">
			<h1>Explore our menu</h1>
			<p className="explore-menu-text">
				Choose from a diverse menu featuring a delectable array of
				dishes. Our mission is to satisfy your cravings and elevate your
				dining experience, one delicious meal at a time.
			</p>
			<div className="explore-menu-list">
				{menu_list.map((item, index) => {
					return (
						<div
							onClick={() => {
								dispatch(filterSet(item.menu_name));
								console.log(activeFilter);
							}}
							 key={index}
							className="explore-menu-list-item"
						>
							<img
								className="active"
								src={item.menu_image}
								alt=""
							/>
							<p>{item.menu_name}</p>
						</div>
					);
				})}
			</div>
			<hr />
		</div>
	);
};

export default ExploreMenu;
