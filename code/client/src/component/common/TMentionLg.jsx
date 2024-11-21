import { Link } from "react-router-dom";

const TMentionLG = () => {
	return (
		<>
			<h1>Mentions Légales</h1>

			<div className="mention">
				<h2>1. Informations générales</h2>
				<p>
					<strong>Nom du site :</strong> Own My Car
					<br />
					<strong>URL :</strong>{" "}
					<Link
						to="https://www.ownmycar.fr"
						target="_blank"
						rel="noopener noreferrer"
					>
						www.ownmycar.fr
					</Link>
					<br />
					<strong>Propriétaire :</strong> Scazza Vincent
					<br />
					<strong>Adresse :</strong> 9 villa des Roitelets
					<br />
					<strong>SIRET :</strong> 123 456 789 00010
					<br />
					<strong>Directeur de la publication :</strong> Scazza Vincent
					<br />
					<strong>Email :</strong>{" "}
					<Link to="mailto:contact@ownmycar.fr">contact@ownmycar.fr</Link>
					<br />
					<strong>Téléphone :</strong> 06 47 38 01 51
				</p>

				<h2>2. Hébergeur</h2>
				<p>
					<strong>Nom de l'hébergeur :</strong> OVHCloud
					<br />
					<strong>Adresse :</strong> 2 Rue Kellermann, 59100 Roubaix, France
					<br />
					<strong>Téléphone :</strong> +33 9 72 10 10 07
					<br />
					<strong>Site web :</strong>{" "}
					<Link
						to="https://www.ovhcloud.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						www.ovhcloud.com
					</Link>
				</p>

				<h2>3. Propriété intellectuelle</h2>
				<p>
					L'ensemble des contenus présents sur le site (textes, images, vidéos,
					logos, etc.) est la propriété exclusive de Own My Car ou de ses
					partenaires. Toute reproduction, distribution, modification ou
					exploitation, partielle ou totale, de ces contenus est strictement
					interdite sans autorisation préalable.
				</p>

				<h2>4. Responsabilité</h2>
				<p>
					Own My Car met tout en œuvre pour assurer l'exactitude des
					informations présentes sur le site. Cependant, nous ne pouvons être
					tenus responsables des éventuelles erreurs, omissions ou
					indisponibilités temporaires du site.
				</p>

				<h2>5. Protection des données personnelles</h2>
				<p>
					Conformément au Règlement Général sur la Protection des Données
					(RGPD), vos données personnelles collectées via ce site sont utilisées
					uniquement dans le cadre défini par notre{" "}
					<Link to="/privacy-policy">Politique de confidentialité</Link>. Vous
					disposez d'un droit d'accès, de rectification et de suppression de vos
					données. Pour toute demande, veuillez nous contacter à l'adresse :{" "}
					<Link to="mailto:privacy@ownmycar.fr">privacy@ownmycar.fr</Link>.
				</p>

				<h2>6. Loi applicable</h2>
				<p>
					Les présentes mentions légales sont régies par la loi française. En
					cas de litige, les tribunaux français seront compétents.
				</p>

				<h2>7. Contact</h2>
				<p>
					Pour toute question ou demande d'information concernant les mentions
					légales, veuillez nous contacter à l'adresse suivante :{" "}
					<Link to="mailto:contact@ownmycar.fr">contact@ownmycar.fr</Link>.
				</p>
			</div>
		</>
	);
};

export default TMentionLG;
