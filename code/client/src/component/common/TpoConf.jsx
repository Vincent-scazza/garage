import { Link } from "react-router-dom";

const TpoConf = () => {
	return (
		<>
			<div class="polconf">
				<h1>Politique de Confidentialité</h1>

				<p>
					Chez <strong>Own My Car</strong>, la protection de vos données
					personnelles est une priorité. Cette politique de confidentialité
					décrit la manière dont nous collectons, utilisons et protégeons vos
					données personnelles lorsque vous utilisez notre site internet.
				</p>

				<h2>1. Données collectées</h2>
				<p>Nous collectons les données suivantes :</p>
				<ul>
					<li>Données d'identité : Nom, prénom.</li>
					<li>Données de contact : Adresse e-mail, numéro de téléphone.</li>
					<li>
						Données de navigation : Adresse IP, type de navigateur, historique
						de navigation.
					</li>
					<li>
						Données techniques : Informations sur l’appareil utilisé pour
						accéder au site.
					</li>
				</ul>

				<h2>2. Finalité de la collecte des données</h2>
				<p>
					Les données collectées sont utilisées pour les finalités suivantes :
				</p>
				<ul>
					<li>Fournir les services proposés sur notre site.</li>
					<li>Gérer votre compte utilisateur et vos préférences.</li>
					<li>Communiquer avec vous (notifications, newsletters, etc.).</li>
					<li>
						Améliorer l’expérience utilisateur grâce à l’analyse des
						interactions sur le site.
					</li>
					<li>Respecter nos obligations légales.</li>
				</ul>

				<h2>3. Conservation des données</h2>
				<p>
					Vos données personnelles sont conservées aussi longtemps que
					nécessaire pour les finalités décrites ci-dessus, sauf si une période
					de conservation plus longue est exigée par la loi.
				</p>

				<h2>4. Partage des données</h2>
				<p>
					Vos données personnelles ne sont <strong>jamais vendues</strong> à des
					tiers. Cependant, elles peuvent être partagées dans les cas suivants :
				</p>
				<ul>
					<li>
						Avec des partenaires et prestataires pour l’exécution de services.
					</li>
					<li>
						Pour répondre à une obligation légale ou à une demande officielle
						des autorités.
					</li>
				</ul>

				<h2>5. Sécurité des données</h2>
				<p>
					Nous mettons en œuvre des mesures de sécurité organisationnelles et
					techniques pour protéger vos données contre :
				</p>
				<ul>
					<li>L'accès non autorisé.</li>
					<li>La modification ou la destruction accidentelle ou illégale.</li>
					<li>La divulgation non autorisée.</li>
				</ul>

				<h2>6. Cookies</h2>
				<p>
					Notre site utilise des <strong>cookies</strong> pour collecter
					certaines informations sur votre navigation. Ces cookies peuvent
					inclure :
				</p>
				<ul>
					<li>
						Cookies strictement nécessaires : pour le fonctionnement du site.
					</li>
					<li>
						Cookies de performance : pour analyser l’utilisation du site et
						améliorer son fonctionnement.
					</li>
					<li>
						Cookies publicitaires : pour afficher des publicités adaptées à vos
						intérêts.
					</li>
				</ul>
				<p>
					Vous pouvez gérer vos préférences en matière de cookies via les
					paramètres de votre navigateur.
				</p>

				<h2>7. Vos droits</h2>
				<p>
					Conformément au <strong>RGPD</strong>, vous disposez des droits
					suivants :
				</p>
				<ul>
					<li>
						<strong>Droit d’accès :</strong> Vous pouvez demander une copie des
						données que nous détenons à votre sujet.
					</li>
					<li>
						<strong>Droit de rectification :</strong> Vous pouvez demander la
						correction de données inexactes ou incomplètes.
					</li>
					<li>
						<strong>Droit à l’effacement :</strong> Vous pouvez demander la
						suppression de vos données personnelles.
					</li>
					<li>
						<strong>Droit d’opposition :</strong> Vous pouvez vous opposer à
						l’utilisation de vos données pour certaines finalités.
					</li>
					<li>
						<strong>Droit à la portabilité :</strong> Vous avez le droit de
						recevoir vos données dans un format structuré.
					</li>
				</ul>
				<p>
					Pour exercer vos droits, contactez-nous à l’adresse suivante :
					<a href="mailto:privacy@ownmycar.fr">privacy@ownmycar.fr</a>.
				</p>

				<h2>8. Modifications de la politique</h2>
				<p>
					Nous nous réservons le droit de modifier cette politique de
					confidentialité à tout moment. Les modifications seront publiées sur
					cette page.
				</p>

				<h2>9. Contact</h2>
				<p>
					Si vous avez des questions concernant cette politique de
					confidentialité, vous pouvez nous contacter à :
					<Link to="mailto:privacy@ownmycar.fr">privacy@ownmycar.fr</Link>.
				</p>
			</div>
		</>
	);
};

export default TpoConf;
