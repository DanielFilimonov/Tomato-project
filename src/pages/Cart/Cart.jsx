import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "./cartSlice";
import "./Cart.css";
const Cart = () => {
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	console.log(Object.values(cart));
	return (
		<div className="cart">
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
				{Object.values(cart).map((item) => (
					<div key={item.id}>
						<div className="cart-items-title cart-items-item">
							<img src={item.image} alt="" />
							<p>{item.name}</p>
							<p>${item.price}</p>
							<p>{item.qnty}</p>
							<p>${item.price * item.qnty}</p>
							<p
								onClick={() =>
									dispatch(removeFromCart(item.id))
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
							<p>{0}</p>
						</div>
						<hr />
						<div className="cart-total-details">
							<p>Delivery Free</p>
							<p>{2}</p>
						</div>
						<hr />
						<div className="cart-total-details">
							<b>Total</b>
							<b>{0}</b>
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
