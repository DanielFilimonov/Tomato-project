import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../hooks/useTypeScriptHook";
import {
	removeFromCart,
	selectCartProducts,
	selectTotalAmount,
} from "./cartSlice";
import "./Cart.css";

const Cart: React.FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const cart = useAppSelector(selectCartProducts);
	const totalPrice = useAppSelector(selectTotalAmount);

	if (!Object.keys(cart).length) {
		return (
			<div className="cart-empty">
				<h1 className="cart-empty-title">Your cart is still empty.</h1>
				<Link className="cart-empty-link" to="/">
					Continue shopping.
				</Link>
			</div>
		);
	}

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
							<img src={product.image} alt={product.name} />
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
							<p>${totalPrice}</p>
						</div>
						<hr />
						<div className="cart-total-details">
							<p>Delivery Fee</p>
							<p>${2}</p>
						</div>
						<hr />
						<div className="cart-total-details">
							<b>Total</b>
							<b>${totalPrice + 2}</b>
						</div>
					</div>
					<button onClick={() => navigate("/order")}>
						PROCEED TO CHEAKOUT
					</button>
				</div>
				<div className="cart-promocode">
					<div>
						<p>If you have a promo code, Enter it here </p>
						<div className="cart-promocode-input">
							<input type="text" placeholder="promo code" />
							<button
								onClick={() => {
									alert(
										"Это демонстрационная версия, промокоды недоступны"
									);
								}}
							>
								{" "}
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
