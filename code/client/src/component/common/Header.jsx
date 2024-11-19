import { Link } from "react-router-dom";

const Header = () => {
	return (
		// composant/balise Link remplace la balise a
		//l'attribue to remplace l'attribut href
		<header>
			<nav className="navbar container">
				{/* <!-- Menu Burger --> */}
				<div className="menu-burger" id="menu-burger" onclick="toggleMenu()">
					<span />
					<span />
					<span />
				</div>

				{/* <!-- Logo --> */}
				<h1>
					<Link to="/" className="logo">
						OWN <span> MY CAR</span>
					</Link>
				</h1>

				{/* <!-- Bouton de switch pour le mode clair/sombre --> */}
				<div
					className="theme-switch"
					id="them /e-switch"
					onclick="toggleTheme()"
				>
					<i className="bx bx-sun" id="theme-icon" />
				</div>

				{/* <!-- Navigation principale --> */}
				<ul className="nav-links" id="nav-links">
					<li className="close-btn" onclick="toggleMenu()">
						&times;
					</li>
					<li>
						<Link to="/vehicules">Nos Véhicules</Link>
					</li>
					<li>
						<Link to="/reviews">Avis Clients</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
					<li>
						<button className="login-btn" onclick="togglePopup()" type="button">
							Se connecter
						</button>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
