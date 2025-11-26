import React from "react";

import { useAppDispatch } from "../../hooks/useTypeScriptHook";
import { addToCart, deleteInCart } from "../../pages/Cart/cartSlice";
import { assets } from "../../assets/assets";

import "./FoodItem.css";

interface IFoodItem {
	id: string;
	name: string;
	category: string;
	description: string;
	price: number;
	image: string;
	productCount: number;
}

const FoodItem: React.FC<IFoodItem> = ({
	id,
	name,
	price,
	description,
	image,
	productCount,
	category,
}) => {
	const dispatch = useAppDispatch();
	return (
		<div className="food-item">
			<div className="food-item-img-container">
				<img className="food-item-img" src={image} alt="" />
				{productCount === 0 ? (
					<img
						onClick={() =>
							dispatch(
								addToCart({
									id,
									name,
									image,
									price,
								})
							)
						}
						className="add"
						src={assets.add_icon_white}
						alt=""
					/>
				) : (
					<div className="food-item-counter">
						<img
							onClick={() => dispatch(deleteInCart(id))}
							src={assets.remove_icon_red}
							alt=""
						/>
						<p>{productCount}</p>
						<img
							onClick={() =>
								dispatch(
									addToCart({
										id,
										name,
										image,
										price,
									})
								)
							}
							src={assets.add_icon_green}
							alt=""
						/>
					</div>
				)}
			</div>
			<div className="food-item-info">
				<div className="food-item-info">
					<div className="food-item-name-raiting">
						<p>{name}</p>
						<img src={assets.rating_starts} alt="" />
					</div>
					<p className="food-item-desc">{description}</p>
					<p className="food-item-price">${price}</p>
				</div>
			</div>
		</div>
	);
};

export default FoodItem;
