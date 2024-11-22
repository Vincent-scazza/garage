import { Link } from "react-router-dom";

const CarouselCar = () => {
	return (
		<section className="carousel-section container">
			<h2>Nos Véhicules</h2>
			{JSON.stringify}
			<div className="carousel">
				<div className="carousel-track">
					<article className="carousel-item">
						<img
							src="/img/audi-a6-sedan-front-view.png"
							alt="Véhicule Audi A6"
						/>
						<h3>Audi A6</h3>
						<p>À partir de 4 200 €</p>
						<Link to={"https://annonce"} className="btn-carousel">
							Voir L'annonce
						</Link>
						<img
							className="qrcode"
							src="/img/vehicle1_qrcode.png"
							alt="QR Code pour Audi A6"
						/>
						<i
							className="bx bx-heart like-icon"
							aria-label="Ajouter aux favoris"
							role="button"
							tabIndex="0"
						/>
					</article>

					<article className="carousel-item">
						<img src="/img/BMW_annonce.png" alt="Véhicule BMW" />
						<h3>BMW Serie 2</h3>
						<p>À partir de 12 000 €</p>
						<Link to={"https://example.com"} className="btn-carousel">
							Voir L'annonce
						</Link>

						<img
							className="qrcode"
							src="/img/qrcode_localhost.png"
							alt="QR Code pour Audi A6"
						/>
						<i
							className="bx bx-heart like-icon"
							aria-label="Ajouter aux favoris"
							role="button"
							tabIndex="0"
						/>
					</article>

					<article className="carousel-item">
						<img src="/img/mercedes_g.jpeg" alt="Véhicule Mercedes GLC" />
						<h3>Mercedes classe G</h3>
						<p>À partir de 37 000 €</p>
						<Link to={"https://annonce"} className="btn-carousel">
							Voir L'annonce
						</Link>
						<img
							className="qrcode"
							src="/img/vehicle1_qrcode.png"
							alt="QR Code pour Audi A6"
						/>
						<i
							className="bx bx-heart like-icon"
							aria-label="Ajouter aux favoris"
							role="button"
							tabIndex="0"
						/>
					</article>

					<article className="carousel-item">
						<img
							src="/img/free-photo-of-suv-dans-un-paysage-d-automne-avec-des-ruines-de-chateau.jpeg"
							alt="Véhicule Peugeot 208"
						/>
						<h3>Peugeot 3008</h3>
						<p>À partir de 10 000 €</p>
						<Link to={"https://example.com"} className="btn-carousel">
							Voir L'annonce
						</Link>
						<img
							className="qrcode"
							src="/img/vehicle1_qrcode.png"
							alt="QR Code pour Audi A6"
						/>
						<i
							className="bx bx-heart like-icon"
							aria-label="Ajouter aux favoris"
							role="button"
							tabIndex="0"
						/>
					</article>

					<article className="carousel-item">
						<img src="/img/clio.jpg" alt="Véhicule Renault" />
						<h3>Renault Mégane</h3>
						<p>À partir de 2 100 €</p>
						<Link to={"https://example.com"} className="btn-carousel">
							Voir L'annonce
						</Link>
						<img
							className="qrcode"
							src="/img/vehicle1_qrcode.png"
							alt="QR Code pour Audi A6"
						/>
						<i
							className="bx bx-heart like-icon"
							aria-label="Ajouter aux favoris"
							role="button"
							tabIndex="0"
						/>
					</article>
				</div>
			</div>
		</section>
	);
};

export default CarouselCar;
