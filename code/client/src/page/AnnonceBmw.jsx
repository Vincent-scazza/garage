import Footer from "../component/common/Footer";
import Header from "../component/common/Header";
import NewsLetter from "../component/home/NewsLetter";
import "../assets/css/styles.css";
import "../assets/css/annonce_bmw";

const AnnonceBmw = () => {
	// Fragment : élément anonyme
	return (
		<>
			<main>
				<PopularBrands />
				<CarouselCar />
				<Avis />
				<Expertise />
				<NewsLetter />
			</main>
		</>
	);
};

export default AnnonceBmw;

// =======================   PAGE A TERMINER ==================================
