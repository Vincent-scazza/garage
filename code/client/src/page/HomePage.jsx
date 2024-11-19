import Footer from "../component/common/Footer";
import Header from "../component/common/Header";
import PopularBrands from "../component/home/PopularBrands";
import CarouselCar from "../component/home/CarouselCar";
import Avis from "../component/home/Avis";
import Expertise from "../component/home/Expertise";
import "../assets/css/styles.css";

const HomePage = () => {
	// Fragment : élément anonyme
	return (
		<>
			<main>
				<PopularBrands />
				<CarouselCar />
				<Avis />
				<Expertise />
			</main>
		</>
	);
};

export default HomePage;
