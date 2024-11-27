import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../provider/UserProvider";
import "../../assets/js/nuit";
import { nuit } from "../../assets/js/nuit";

const Header = () => {
	useEffect(() => {
		nuit();
	}, []);

	// useContext permet d'accéder aux données
	const { user, setUser } = useContext(UserContext);
	return (
		// composant/balise Link remplace la balise a
		//l'attribue to remplace l'attribut href

		// condition ? instruction : else

		<header>
			<nav className="navbar container, navabar">
				{/* <!-- Menu Burger --> */}

				{/* <!-- Logo --> */}
				<h1>
					<Link to="/" className="logo">
						OWN <span> MY CAR</span>
					</Link>
				</h1>

				{/* <!-- Bouton de switch pour le mode clair/sombre --> */}
				<div className="theme-switch" id="them /e-switch" onclick="toggleTheme">
					<i className="bx bx-sun" id="theme-icon" />
				</div>
				{/* <!-- Navigation principale --> */}
				<ul id="nav-links">
					<li className="nav-btn" onclick="toggleMenu()">
						<Link to="/">Nos Véhicules</Link>
					</li>

					<li className="nav-btn">
						<Link to="/contact">Contact</Link>
					</li>

					{user ? (
						<Link to={"/Logout"}>Déconnexion</Link>
					) : (
						<>
							<li className="nav-btn">
								<Link to={"/RegisterPage"}>Inscription </Link>
							</li>
							<li className="nav-btn">
								<Link to={"/LoginPage"}>Connexion</Link>
							</li>
						</>
					)}

					{user?.role.name === "admin" ? (
						<Link to={"/admin"}>Administration</Link>
					) : (
						<></>
					)}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
