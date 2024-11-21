import { Link } from "react-router-dom";

const TxtCgu = () => {
	return (
		<>
			<div className="cgu">
				<h2>Introduction</h2>
				<p>
					Bienvenue sur <strong>Own My Car</strong>. En accédant à notre site,
					vous acceptez de respecter les présentes Conditions Générales
					d'Utilisation (CGU). Veuillez les lire attentivement avant de naviguer
					ou d'utiliser nos services.
				</p>

				<h2>1. Objet</h2>
				<p>
					Les présentes CGU définissent les modalités et conditions dans
					lesquelles les utilisateurs peuvent accéder au site et utiliser les
					services proposés.
				</p>

				<h2>2. Services proposés</h2>
				<p>
					Own My Car est une plateforme dédiée à la consultation d'annonces de
					voitures. Les utilisateurs peuvent :
				</p>
				<ul>
					<li>
						Rechercher des véhicules disponibles à la vente ou à la location.
					</li>
					<li>Consulter les détails des annonces.</li>
					<li>
						Utiliser les outils mis à disposition pour faciliter leur
						expérience.
					</li>
				</ul>

				<h2>3. Responsabilités des utilisateurs</h2>
				<p>En utilisant notre site, vous vous engagez à :</p>
				<ul>
					<li>
						Fournir des informations exactes lors de la création de votre
						compte, le cas échéant.
					</li>
					<li>Ne pas utiliser le site à des fins frauduleuses ou illégales.</li>
					<li>
						Respecter les droits des autres utilisateurs et de l'équipe Own My
						Car.
					</li>
				</ul>

				<h2>4. Responsabilités de Own My Car</h2>
				<p>
					Nous faisons tout notre possible pour garantir l'exactitude des
					informations présentes sur le site. Cependant, nous ne pouvons pas
					être tenus responsables des informations inexactes ou des litiges
					entre les utilisateurs et les annonceurs.
				</p>

				<h2>5. Protection des données personnelles</h2>
				<p>
					Vos données personnelles sont protégées conformément à notre{" "}
					<Link to="/">Politique de confidentialité</Link>. Veuillez consulter
					ce document pour plus de détails.
				</p>

				<h2>6. Modification des CGU</h2>
				<p>
					Own My Car se réserve le droit de modifier ces CGU à tout moment. Les
					modifications seront publiées sur cette page et prendront effet
					immédiatement.
				</p>

				<h2>7. Contact</h2>
				<p>
					Pour toute question ou remarque concernant ces CGU, vous pouvez nous
					contacter à l'adresse suivante :{" "}
					<Link to="mailto:support@ownmycar.fr">support@ownmycar.fr</Link>.
				</p>
			</div>
		</>
	);
};

export default TxtCgu;
