import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";
import "./Home.css";

const Home = () => {
	return (
		<div>
			<Header />
			<ExploreMenu />
			<FoodDisplay />
			<AppDownload />
		</div>
	);
};

export default Home;
