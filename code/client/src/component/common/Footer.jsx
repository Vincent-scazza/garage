import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-container">
				<div className="footer-column">
					<h3>Own My Car</h3>
					<p>Nous contacter</p>
					<img
						src="/img/logo_site.png"
						alt="Logo Own My Car"
						className="footer-logo"
					/>
				</div>
				<div className="footer-column">
					<h3>Nous suivre</h3>
					<ul>
						<li>
							<Link to="#">
								<i className="bx bxl-twitter" /> Twitter
							</Link>
						</li>
						<li>
							<Link to="#">
								<i className="bx bxl-instagram" /> Instagram
							</Link>
						</li>
						<li>
							<Link to="#">
								<i className="bx bxl-facebook" /> Facebook
							</Link>
						</li>
					</ul>
				</div>
				<div className="footer-column">
					<h3>Autres</h3>
					<ul>
						<li>
							<Link to="mention_legales">Mentions Légales</Link>
						</li>

						<li>
							<Link to="cgu">Conditions générales d'utilisation</Link>
						</li>
						<li>
							<Link to="PoConf">Politique de Confidentialite</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="footer-bottom">
				<p>&copy; Own My Car 2024 Tous droits réservés.</p>
			</div>
		</footer>
	);
};

export default Footer;
