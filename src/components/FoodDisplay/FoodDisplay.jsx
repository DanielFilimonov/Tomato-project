import { useSelector } from "react-redux";

import { selectFilters } from "../ExploreMenu/filtersSlice";
import { selectCartProducts } from "../../pages/Cart/cartSlice";
import { useSectionInView } from "../../hooks/useSectionInView";
import { food_list } from "../../assets/assets";
import FoodItem from "../FoodItem/FoodItem";
import "./FoodDisplay.css";

const FoodDisplay = () => {
	const { ref } = useSectionInView({ sectionName: "menu", threshold: 0.2 });
	const { activeFilter } = useSelector(selectFilters);
	const cart = useSelector(selectCartProducts);

	const getProductCount = (id) => {
		return cart[id]?.qnty || 0;
	};

	const foodDisplayListRender = (foodListDataArr) => (
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
