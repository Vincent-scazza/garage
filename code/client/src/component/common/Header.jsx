import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../provider/UserProvider";

const Header = () => {
	// useContext permet d'accéder aux données
	const { user, setUser } = useContext(UserContext);
	return (
		// composant/balise Link remplace la balise a
		//l'attribue to remplace l'attribut href

		// condition ? instruction : else

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
				<ul className="" id="nav-links">
					<li className="" onclick="toggleMenu()">
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

					{user ? (
						<Link to={"/Logout"}>Log out</Link>
					) : (
						<>
							<Link to={"/RegisterPage"}>register</Link>
							<br />
							<Link to={"/LoginPage"}>login</Link>
						</>
					)}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
