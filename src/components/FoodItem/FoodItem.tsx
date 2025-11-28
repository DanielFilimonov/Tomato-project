import React from "react";

import { useAppDispatch } from "../../hooks/useTypeScriptHook";
import { addToCart, deleteInCart } from "../../pages/Cart/cartSlice";
import { assets } from "../../assets/assets";

import "./FoodItem.css";

interface IFoodItem {
	id: string;
	name: string;
	description: string;
	price: number;
	image: string;
	productCount: number;
	rating: number;
}

const FoodItem: React.FC<IFoodItem> = ({
	id,
	name,
	price,
	description,
	image,
	productCount,
	rating,
}) => {
	const dispatch = useAppDispatch();

	const addProductToCart = () =>
		dispatch(
			addToCart({
				id,
				name,
				image,
				price,
			})
		);

	const renderReitingStars = () => {
		const MAX_STARS = 5;
		const stars = [];

		for (let i = 0; i < MAX_STARS; i++) {
			stars.push(
				<img
					key={i}
					src={i < rating ? assets.full_star : assets.empty_star}
					alt="star"
				/>
			);
		}

		return <div className="food-item-stars">{stars}</div>;
	};

	return (
		<div className="food-item">
			<div className="food-item-img-container">
				<img className="food-item-img" src={image} alt="" />
				{productCount === 0 ? (
					<img
						onClick={addProductToCart}
						className="add"
						src={assets.add_icon_white}
						alt="Plus"
					/>
				) : (
					<div className="food-item-counter">
						<img
							onClick={() => dispatch(deleteInCart(id))}
							src={assets.remove_icon_red}
							alt="Minus"
						/>
						<p>{productCount}</p>
						<img
							onClick={addProductToCart}
							src={assets.add_icon_green}
							alt="Plus"
						/>
					</div>
				)}
			</div>
			<div className="food-item-info">
				<div className="food-item-name-raiting">
					<p>{name}</p>
					{renderReitingStars()}
				</div>
				<p className="food-item-desc">{description}</p>
				<p className="food-item-price">${price}</p>
			</div>
		</div>
	);
};

export default FoodItem;
