import { Provider } from "react-redux";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

const App = () => {
	return (
		<>
			<div className="app">
				<Navbar />
					<Home />
			</div>
			<Footer />
		</>
	);
};

export default App;
