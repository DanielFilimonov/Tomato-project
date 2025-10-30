import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { useDispatch } from "react-redux";
import { addToCart, deleteInCart } from "../../pages/Cart/cartSlice";

const FoodItem = ({
	id,
	name,
	price,
	description,
	image,
	productCount,
}) => {
	const dispatch = useDispatch();
	return (
		<div className="food-item">
			<div className="food-item-img-container">
				<img className="food-item-img" src={image} alt="" />
				{productCount === 0 ? (
					<img
						onClick={() =>
							dispatch(
								addToCart({
									_id: id,
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
							onClick={() =>
								dispatch(
									deleteInCart({
										_id: id,
									})
								)
							}
							src={assets.remove_icon_red}
							alt=""
						/>
						<p>{productCount}</p>
						<img
							onClick={() =>
								dispatch(
									addToCart({
										_id: id,
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
