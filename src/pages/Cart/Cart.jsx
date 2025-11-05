import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "./cartSlice";
import "./Cart.css";
const Cart = () => {
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const getTotalPrice = () => {
		if (Object.values(cart).length > 0) {
			return Object.values(cart).reduce(
				(accumulator, product) =>
					accumulator + product.price * product.qnty,
				0
			);
		}
		 else return 0
	};

	return (
		<div className="cart" id="cart">
			<div className="cart-items">
				<div className="cart-items-title">
					<p>Items</p>
					<p>Title</p>
					<p>Prise</p>
					<p>Quantity</p>
					<p>Total</p>
					<p>Remove</p>
				</div>
				<br />
				<hr />
				{Object.values(cart).map((product) => (
					<div key={product.id}>
						<div className="cart-items-title cart-items-item">
							<img src={product.image} alt="" />
							<p>{product.name}</p>
							<p>${product.price}</p>
							<p>{product.qnty}</p>
							<p>${product.price * product.qnty}</p>
							<p
								onClick={() =>
									dispatch(removeFromCart(product.id))
								}
								className="cross"
							>
								x
							</p>
						</div>
						<hr />
					</div>
				))}
			</div>
			<div className="cart-bottom">
				<div className="cart-total">
					<h2>Cart Totals</h2>
					<div>
						<div className="cart-total-details">
							<p>Subtotal</p>
							<p>${getTotalPrice()}</p>
						</div>
						<hr />
						<div className="cart-total-details">
							<p>Delivery Fee</p>
							<p>${2}</p>
						</div>
						<hr />
						<div className="cart-total-details">
							<b>Total</b>
							<b>${getTotalPrice() + 2}</b>
						</div>
					</div>
					<button>PROCEED TO CHEAKOUT</button>
				</div>
				<div className="cart-promocode">
					<div>
						<p>If you have a promo code, Enter it here </p>
						<div className="cart-promocode-input">
							<input type="text" placeholder="promo code" />
							<button>Submit</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
