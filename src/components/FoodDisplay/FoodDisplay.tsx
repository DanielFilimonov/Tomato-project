import React, { JSX } from "react";

import { useAppSelector } from "../../hooks/useTypeScriptHook";
import { selectFilters } from "../ExploreMenu/filtersSlice";
import { selectCartProducts } from "../../pages/Cart/cartSlice";
import { useSectionInView } from "../../hooks/useSectionInView";
import { food_list } from "../../assets/assets";
import FoodItem from "../FoodItem/FoodItem";

import "./FoodDisplay.css";

interface IFoodList {
	_id: string;
	name: string;
	category: string;
	description: string;
	price: number;
	image: string;
}

const FoodDisplay: React.FC = () => {
	const { ref } = useSectionInView({ sectionName: "menu", threshold: 0.2 });
	const { activeFilter } = useAppSelector(selectFilters);
	const cart = useAppSelector(selectCartProducts);

	const getProductCount = (id: string) => {
		return cart[id]?.qnty || 0;
	};

	const foodDisplayListRender = (
		foodListDataArr: IFoodList[]
	): JSX.Element => (
		<div className="food-display-list">
			{foodListDataArr.map(
				(item) =>
					(activeFilter === "all" ||
						activeFilter === item.category) && (
						<FoodItem
							key={item._id}
							id={item._id}
							name={item.name}
							category={item.category}
							description={item.description}
							price={item.price}
							image={item.image}
							productCount={getProductCount(item._id)}
						/>
					)
			)}
		</div>
	);

	return (
		<div className="food-display" ref={ref} id="food-display">
			<h2>Top dishes near you</h2>
			{foodDisplayListRender(food_list)}
		</div>
	);
};

export default FoodDisplay;
