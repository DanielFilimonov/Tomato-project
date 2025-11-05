import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets';
const AppDownload = () => {
  return (
		<div className="app-download section" id="mobile-app">
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
}

export default AppDownload
