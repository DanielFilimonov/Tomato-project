import "./FoodDisplay.css";
import { food_list } from "../../assets/assets";
import FoodItem from "../FoodItem/FoodItem";
import { useSelector } from "react-redux";

const FoodDisplay = () => {
    const { activeFilter } = useSelector((state) => state.filters);
    const cart = useSelector((state) => state.cart);

    const getProductCount = (id) => {
        return cart[id]?.qnty || 0;
    }

    const foodDisplayListRender = (foodListDataArr) => (
		<div className="food-display-list">
            {foodListDataArr.map((item) => {
				if (activeFilter === "all" || activeFilter === item.category) {
					return (
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
					);
                }
			})}
		</div>
	);

	return (
		<div className="food-display" id="food-display">
			<h2>Top dishes near you</h2>
			{foodDisplayListRender(food_list)}
		</div>
	);
};

export default FoodDisplay;
