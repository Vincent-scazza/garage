const CarSoItem = () => {
	return (
		<>
			<section className="image-container">
				<img
					src="/img/audia6.png"
					alt="[Modèle du véhicule]"
					className="image-principale"
				/>
			</section>

			<section className="details-annonce">
				<div className="container">
					<h2>AUDI A6 - 2012</h2>

					<p className="prix">Prix : 4200 €</p>

					<p className="description">Description détaillée du véhicule</p>

					<h2>Caractéristiques principales</h2>
					<ul className="caracteristiques">
						<li>
							<strong>Année :</strong> 2012
						</li>
						<li>
							<strong>Kilométrage :</strong> 134 776 km
						</li>
						<li>
							<strong>Carburant :</strong> Diesel
						</li>
						<li>
							<strong>Boîte de vitesses :</strong> Automatique
						</li>
						<li>
							<strong>Puissance fiscale :</strong> 11 CV
						</li>
						<li>
							<strong>Couleur :</strong> Grise
						</li>
					</ul>

					<h2>Options et équipements</h2>
					<ul className="options">
						<li>Sièges en cuir avec réglages électriques</li>
						<li>Toit ouvrant panoramique</li>
						<li>Volant multifonctions en cuir</li>
					</ul>
				</div>
			</section>
		</>
	);
};

export default CarSoItem;
