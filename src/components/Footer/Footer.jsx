import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
	return (
		<div className="footer" id="footer">
			<div className="footer-content">
				<div className="footer-content-left">
					<img src={assets.logo} alt="" />
					<p>
						At Tomato, we're not just committed, but truly
						passionate about delivering a culinary experience that
						tantalizes your tastebuds with the freshest and most
						delicious meals direct to your doorstep. Our unwavering
						dedication to providing both premium quality and rapid
						service ensures that you can savor a dining experience
						that rivals your favorite restaurants, while relishing
						the comfort and convenience of your own home. We believe
						in turning every meal into a special occasion, and with
						Tomato, you are just a click away from an extraordinary
						home dining adventure.
					</p>
					<div className="footer-social-icons">
						<img src={assets.facebook_icon} alt="" />
						<img src={assets.twitter_icon} alt="" />
						<img src={assets.linkedin_icon} alt="" />
					</div>
				</div>
				<div className="footer-content-center">
					<h2>COMPANY</h2>
					<ul>
						<li>Home</li>
						<li>About us</li>
						<li>Delivery</li>
						<li>Privacy policy</li>
					</ul>
				</div>
				<div className="footer-content-right">
					<h2>GET IN TOUCH</h2>
					<ul>
						<li>+1-212-456-7890</li>
						<li>contact@tomato.com</li>
					</ul>
				</div>
			</div>
			<hr />
			<p className="footer-copyright">
				Copyright 2024 © Tomato - All Right Reserved.
			</p>
		</div>
	);
};

export default Footer;
