import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";

const AdminHomePage = () => {
	return (
		<>
			<main>
				<h1 className="titre">Administration</h1>
				<div className="Admine">
					<FontAwesomeIcon icon={faDatabase} size="2x" className="SQL" />{" "}
					<span className="blanc">Administration</span>
				</div>
				<div className="admin">
					<FontAwesomeIcon icon={faCar} size="2x" className="CAR" />
					<span className="blanc"> Manage vehicule</span>
					<br />
				</div>
				{/* <FormContact /> */}
				<div className="bb">
					<Link to={"/admin/vehicule"}> Liste des vehicules</Link>
				</div>
			</main>
		</>
	);
};

export default AdminHomePage;
