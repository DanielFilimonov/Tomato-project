import { useSectionInView } from "../../hooks/useSectionInView";
import { assets } from "../../assets/assets";
import "./AppDownload.css";

const AppDownload = () => {
	const { ref } = useSectionInView({
		sectionName: "mobile-app",
		threshold: 0.95,
		rootMargin: "-10% 0px 0px 0px",
	});

	return (
		<div className="app-download" ref={ref} id="mobile-app">
			<h3>
				For Better Experience Download <br /> Tomato App
			</h3>
			<p className="app-download__text">
				Install our convenient app for instant ordering of delicious
				food right on your device. Download the app now and enjoy quick
				and easy orders from the comfort of your home or office.
			</p>
			<div className="app-download-platforms">
				<img src={assets.play_store} alt="" />
				<img src={assets.app_store} alt="" />
			</div>
		</div>
	);
};

export default AppDownload;
