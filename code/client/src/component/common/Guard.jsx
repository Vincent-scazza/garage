import { useContext, useEffect } from "react";
import { UserContext } from "../../provider/UserProvider";
import { useNavigate } from "react-router-dom";

const Guard = ({ children, roles }) => {
	// récuperer l'utilisateur
	const { user, setUser } = useContext(UserContext);

	// navigation
	const navigate = useNavigate();

	//  tester le role de l'utilisateur
	useEffect(() => {
		if (roles.indexOf(user?.role.name) === -1) {
			window.sessionStorage.setItem("notice", "Accès refuser");
			navigate("/");
			return;
		}
	}, [navigate, roles, user]);

	return children;
};

export default Guard;
