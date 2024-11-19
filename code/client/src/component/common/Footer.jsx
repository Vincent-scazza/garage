const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-container">
				<div className="footer-column">
					<h3>Own My Car</h3>
					<p>Nous contacter</p>
					<img
						src="assests/img/logo_site.png"
						alt="Logo Own My Car"
						className="footer-logo"
					/>
				</div>
				<div className="footer-column">
					<h3>Nous suivre</h3>
					<ul>
						<li>
							<a href="#">
								<i className="bx bxl-twitter" /> Twitter
							</a>
						</li>
						<li>
							<a href="#">
								<i className="bx bxl-instagram" /> Instagram
							</a>
						</li>
						<li>
							<a href="#">
								<i className="bx bxl-facebook" /> Facebook
							</a>
						</li>
					</ul>
				</div>
				<div className="footer-column">
					<h3>Autres</h3>
					<ul>
						<li>
							<a href="#">Mentions Légales</a>
						</li>
						<li>
							<a href="#">Conditions générales</a>
						</li>
						<li>
							<a href="#">Gestion des cookies</a>
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
