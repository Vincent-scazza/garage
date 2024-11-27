import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { selectAllVehicule } from "../../service/vehicule_api";
import "../../assets/css/adminvehicule.css";
import NoticeMessage from "../../component/common/NoticeMessage";

const AdminVehiculePage = () => {
	const [vehicules, setVehicules] = useState([]);

	useEffect(() => {
		selectAllVehicule().then((results) => setVehicules(results.data));
	}, []);

	return (
		<>
			<NoticeMessage />
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
							<td>{data.model}</td>
							<td>{data.price}€</td>
							<td>{data.brand.name}</td>
							<td>
								{data.options.map((item) => (
									<li key={Math.random()}>{item.name}</li>
								))}
							</td>

							<td>
								<Link className="update" to={`/admin/vehicule/form/${data.id}`}>
									<FontAwesomeIcon icon={faPencilAlt} />
									MODIFIER
								</Link>
								<br />
								<Link className="delete" to={"#"}>
									<FontAwesomeIcon icon={faTrash} />
									SUPPRIMER
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
