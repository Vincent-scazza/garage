import Footer from "../component/common/Footer";
import Header from "../component/common/Header";
import PopularBrands from "../component/home/PopularBrands";
import Avis from "../component/home/Avis";
import Expertise from "../component/home/Expertise";
import NewsLetter from "../component/home/NewsLetter";
import AuthPopUp from "../component/common/AuthPopUp";
import VehiculeCarousel from "../component/home/VehiculeCarousel";
import "../assets/css/styles.css";
import NoticeMessage from "../component/common/NoticeMessage";

const HomePage = () => {
	// Fragment : élément anonyme
	return (
		<>
			<main>
				{/* afficher la notification stockée dans la seesion */}
				<NoticeMessage />
				<PopularBrands />
				<VehiculeCarousel />
				<Avis />
				<AuthPopUp />
				<Expertise />
				<NewsLetter />
				{/* - map est l'unique boucle disponible dans le HTML de React
					- accolades permettent de délimiter la partie HTML de la partie JS  */}

				{/*	//boucle sur l'état (useState)
					
					 props : permet de transmettre des données entre un composant parent et un composant enfant
					 équivaut à des attirbuts HTML
				*/}
			</main>
		</>
	);
};

export default HomePage;
