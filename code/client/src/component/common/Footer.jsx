const Footer = () => {
	return (
		<footer class="footer">
			<div class="footer-container">
				<div class="footer-column">
					<h3>Own My Car</h3>
					<p>Nous contacter</p>
					<img
						src="assests/img/logo_site.png"
						alt="Logo Own My Car"
						class="footer-logo"
					/>
				</div>
				<div class="footer-column">
					<h3>Nous suivre</h3>
					<ul>
						<li>
							<a href="#">
								<i class="bx bxl-twitter" /> Twitter
							</a>
						</li>
						<li>
							<a href="#">
								<i class="bx bxl-instagram" /> Instagram
							</a>
						</li>
						<li>
							<a href="#">
								<i class="bx bxl-facebook" /> Facebook
							</a>
						</li>
					</ul>
				</div>
				<div class="footer-column">
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
			<div class="footer-bottom">
				<p>&copy; Own My Car 2024 Tous droits réservés.</p>
			</div>
		</footer>
	);
};

export default Footer;
