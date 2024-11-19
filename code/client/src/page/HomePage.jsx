import Footer from "../component/common/Footer";
import Header from "../component/common/Header";
import PopularBrands from "../component/home/PopularBrands";
import CarouselCar from "../component/home/CarouselCar";
import Avis from "../component/home/Avis";
import Expertise from "../component/home/Expertise";
import NewsLetter from "../component/home/NewsLetter";
import "../assets/css/styles.css";
import { useEffect } from "react";
import { selectAllVehicule } from "../service/vehicule_api";

const HomePage = () => {
	// hook useEffect : permet de déclencher des actions lors du cycle de vie d'un composant (affichage, mise a jour, déaffichge)
	// [] : permet de déclencher des actions, une unique fois, lors de l'affichage du composant
	useEffect(() => {
		// récupere tous les véhicules
		selectAllVehicule();
	}, []);

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

export default HomePage;
