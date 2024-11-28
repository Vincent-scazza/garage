import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { selectAllVehicule, deleteVehicule } from "../../service/vehicule_api";
import "../../assets/css/adminvehicule.css";
import NoticeMessage from "../../component/common/NoticeMessage";
import { authUser } from "../../service/security_api";
import { UserContext } from "../../provider/UserProvider";

const AdminVehiculePage = () => {
	const [vehicules, setVehicules] = useState([]);

	const { id } = useParams();
	const { user, setUser } = useContext(UserContext);
	const navigate = useNavigate();

	useEffect(() => {
		selectAllVehicule().then((results) => setVehicules(results.data));

		// si la variable de route id existe, supprimer un vehicule
		if (id) remove(id);
	}, [id]);

	const remove = async (id) => {
		const authentication = await authUser(user);
		const results = await deleteVehicule(authentication.data.token, id);

		if (results.status === 200) {
			window.sessionStorage.setItem("notice", "Vehicule deleted");
			navigate("/admin/vehicule");
			return;
		}
	};

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
								<Link className="delete" to={`/admin/vehicule/${data.id}`}>
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
