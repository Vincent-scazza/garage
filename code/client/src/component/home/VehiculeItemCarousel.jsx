import { Link } from "react-router-dom";

const VehiculeItemCarousel = ({ data }) => {
	return (
		<article className="carousel-item">
			{/* biome-ignore lint/a11y/useAltText: <explanation> */}
			<img
				src={`${import.meta.env.VITE_API_URL}/img/${data.photo}`}
				alt="annonce voiture"
			/>
			<h3>
				{data.model}-{data.brand.name}
			</h3>
			<p>À partir de {data.price} €</p>
			<Link to={"/annonce"} className="btn-carousel">
				Voir L'annonce
			</Link>
			<img
				className="qrcode"
				src="/img/qrcode_annonce.png"
				alt="QR Code pour Audi A6"
			/>
			<i
				className="bx bx-heart like-icon"
				aria-label="Ajouter aux favoris"
				role="button"
				tabIndex="0"
			/>
		</article>
	);
};

export default VehiculeItemCarousel;
