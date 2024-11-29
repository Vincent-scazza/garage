import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { selectAllVehicule } from "../../service/vehicule_api";
import { UserContext } from "../../provider/UserProvider";
import VehiculeItemCarousel from "./VehiculeItemCarousel";
// récuperer la props data envoyée par le composant parent

const VehiculeCarousel = () => {
	// hook useState : permet de rafraichir visuellement un composant
	const [vehicules, setVehicules] = useState([]);
	// useContext permet d'accéder aux données
	const { user, setUser } = useContext(UserContext);

	// hook useEffect : permet de déclencher des actions lors du cycle de vie d'un composant (affichage, mise a jour, déaffichge)
	// [] : permet de déclencher des actions, une unique fois, lors de l'affichage du composant
	useEffect(() => {
		// récupere tous les véhicules
		selectAllVehicule().then((results) => setVehicules(results.data));
	}, []);

	return (
		<section className="carousel-section container">
			<h2>Nos Véhicules</h2>
			{user?.email}
			<br />
			{user?.password}
			<div className="carousel">
				<div className="carousel-track">
					{vehicules.map((item) => {
						return <VehiculeItemCarousel key={Math.random()} data={item} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default VehiculeCarousel;
