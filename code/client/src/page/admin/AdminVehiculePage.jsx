import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { selectAllVehicule } from "../../service/vehicule_api";
import "../../assets/css/adminvehicule.css";

const AdminVehiculePage = () => {
	const [vehicules, setVehicules] = useState([]);

	useEffect(() => {
		selectAllVehicule().then((results) => setVehicules(results.data));
	}, []);

	return (
		<>
			<main className="conteneur">
				<h1 className="titre">Vehicules</h1>
				<button className="btn">
					<FontAwesomeIcon icon={faPlus} />
					<Link to={"/admin/vehicule/form"}> Ajouter un vehicule</Link>
				</button>
			</main>

			<table>
				<thead>
					<tr>
						<th>Photo</th>
						<th>Modeles</th>
						<th>Prix</th>
						<th>Marque</th>
						<th>Option</th>
						<th />
					</tr>
				</thead>
				<tbody>
					{vehicules.map((data) => (
						<tr key={Math.random()}>
							<td>
								<img
									className="photo"
									src={`${import.meta.env.VITE_API_URL}/img/${data.photo}`}
									alt="annonce voiture"
								/>
							</td>
							<td>{data.name}</td>
							<td>{data.price}€</td>
							<td>{data.brand.name}</td>
							<td>
								{data.options.map((item) => (
									<li key={Math.random()}>{item.name}</li>
								))}
							</td>

							<td>
								<Link className="update" to={"#"}>
									<i className="fas fa-trash" />
									Update
								</Link>
								<br />
								<Link className="delete" to={"#"}>
									Delete
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default AdminVehiculePage;
