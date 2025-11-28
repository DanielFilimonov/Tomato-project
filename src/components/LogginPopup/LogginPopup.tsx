import { useState } from "react";

import { assets } from "../../assets/assets";
import "./LogginPopup.css";

interface ILogginPopupProps {
	setShowLogin: (value: boolean) => void;
}

const LogginPopup = ({ setShowLogin }: ILogginPopupProps)=> {
	const [currState, setCurrState] = useState("Login");

	return (
		<div className="login-popup">
			<form className="loggin-popup-container">
				<div className="loggin-popup-title">
					<h2>{currState}</h2>
					<img
						onClick={() => setShowLogin(false)}
						src={assets.cross_icon}
						alt="СrossIcon"
					/>
				</div>
				<div className="loggin-popup-inputs">
					{currState === "Login" ? (
						<></>
					) : (
						<input type="text" placeholder="Yor name" required />
					)}
					<input type="email" placeholder="Yor email" required />
					<input
						type="password"
						placeholder="Yor Password"
						required
					/>
				</div>
				<button>
					{currState === "Sign Up" ? "Create account" : "Login"}
				</button>
				<div className="login-popup-condition">
					<input type="checkbox" required />
					<p>
						By continuing, I agree to the terms of use & privacy
						policy.
					</p>
				</div>
				{currState === "Login" ? (
					<p>
						Create a new account?{" "}
						<span onClick={() => setCurrState("Sign Up")}>
							Click here
						</span>
					</p>
				) : (
					<p>
						Already have an account{" "}
						<span onClick={() => setCurrState("Login")}>
							Login here
						</span>
					</p>
				)}
			</form>
		</div>
	);
};

export default LogginPopup;
