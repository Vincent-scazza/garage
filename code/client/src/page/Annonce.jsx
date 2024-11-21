import Footer from "../component/common/Footer";
import Header from "../component/common/Header";
import CarSoItem from "../component/common/CarSoItem";
import NewsLetter from "../component/home/NewsLetter";
import AuthPopUp from "../component/common/AuthPopUp";
import "../assets/css/styles.css";
import "../assets/css/annonce.css";

const Annonce = () => {
	// Fragment : élément anonyme
	return (
		<>
			<main>
				<CarSoItem />
				<NewsLetter />
			</main>
		</>
	);
};

export default Annonce;
