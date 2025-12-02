/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

import { useSectionInView } from "../../hooks/useSectionInView";
import { assets } from "../../assets/assets";

import "./Footer.css";

const Footer: React.FC = () => {
	const { ref } = useSectionInView({
		sectionName: "contact-us",
		threshold: 0.95,
	});

	const demonstration = () =>
		alert("Это демонстрационная версия, данная функция недоступна.");

	return (
		<footer className="footer section" ref={ref} id="contact-us">
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
						<img
							onClick={demonstration}
							src={assets.facebook_icon}
							alt="FacebookIcon"
						/>
						<img
							onClick={demonstration}
							src={assets.twitter_icon}
							alt="TwitterIcon"
						/>
						<img
							onClick={demonstration}
							src={assets.linkedin_icon}
							alt="LinkedinIcon"
						/>
					</div>
				</div>
				<div className="footer-content-center">
					<h2>COMPANY</h2>
					<ul>
						<li>
							<Link to="/#home">Home</Link>
						</li>
						<li>
							<a onClick={demonstration}>About us</a>
						</li>
						<li>
							<a onClick={demonstration}>Delivery</a>
						</li>
						<li>
							<a onClick={demonstration}>Privacy policy</a>
						</li>
					</ul>
				</div>
				<div className="footer-content-right">
					<h2>GET IN TOUCH</h2>
					<ul>
						<li>
							<a onClick={demonstration}>+1-212-456-7890</a>
						</li>
						<li>
							<a onClick={demonstration}>contact@tomato.com</a>
						</li>
					</ul>
				</div>
			</div>
			<hr />
			<p className="footer-copyright">
				Copyright 2025 © Tomato - All Right Reserved.
			</p>
		</footer>
	);
};

export default Footer;
