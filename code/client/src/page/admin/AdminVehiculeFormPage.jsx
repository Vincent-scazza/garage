import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { selectAllBrand } from "../../service/brand_api";
import {
	CreateVehicule,
	selectOneVehicule,
	updateVehicule,
} from "../../service/vehicule_api";
import { selectAllOptions } from "../../service/options_api";
import { authUser } from "../../service/security_api";
import { UserContext } from "../../provider/UserProvider";
import NoticeMessage from "../../component/common/NoticeMessage";

const AdminVehiculeFormPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		// reset permet de réinitialiser un formulaire avec des données existantes
		reset,
	} = useForm();

	// useNavigate
	const navigate = useNavigate();

	// récupérer les marques et les options
	const [brands, setBrands] = useState([]);
	const [options, setOptions] = useState([]);

	// stocker le vehicule dont l'identifiant est contenu dans la route
	const [vehicule, setVehicule] = useState([]);

	// récuperer la varibale de route
	const { id } = useParams();
	// console.log(id);

	useEffect(() => {
		selectAllBrand().then((results) => setBrands(results.data));
		selectAllOptions().then((results) => setOptions(results.data));
		selectOneVehicule(id).then((results) => {
			// casses a cocher,un array est obligatoire pour procéder
			// const data = {
			// 	...results.data,
			// 	options_id: results.data.options_id.split(","),
			// };

			// stocker les résultats dans un état
			setVehicule(results.data);

			//réinitialiser le formulaire avec les données dans un état
			reset(results.data);
		});
	}, [id, reset]);

	// récupérer l'utilisateur stocké dans le contexte
	const { user, setUser } = useContext(UserContext);

	const onSubmit = async (data) => {
		// console.log(data);

		// authentification
		const authentication = await authUser(user);

		// console.log(authentication.data.token);

		// créer un véhicule
		const results = id
			? await updateVehicule(authentication.data.token, data)
			: await CreateVehicule(authentication.data.token, data);

		// si le véhicule a été crée
		if ([200, 201].indexOf(results.status) >= 0) {
			// stocker le message dans la session
			window.sessionStorage.setItem(
				"notice",
				id ? "Vehicule updated" : "Vehicule created",
			);

			// redirection vers route
			navigate("/admin/vehicule");
		}
	};

	return (
		<main className="black">
			<button className="btn" type="button">
				<Link to={"/admin/vehicule"}> Page précédente</Link>
			</button>

			<h1>Formulaire </h1>

			{/* 			
					si le formulaire possède un chmap file
					ajouter l'attribut encType = multipart/form-data
				 */}

			<form
				className="form"
				onSubmit={handleSubmit(onSubmit)}
				encType="multipart/form-data"
			>
				<p>
					<label htmlFor="model">Model :</label>
					<input
						type="text"
						id="model"
						{...register("model", {
							required: "Le modèles du véhicule est requis ",
						})}
					/>
					<span>{errors?.model?.message}</span>
				</p>
				<p>
					<label htmlFor="price">Prix :</label>
					<input
						type="text"
						id="price"
						{...register("price", { required: "Le prix est requis" })}
					/>
					<span>{errors?.price?.message}</span>
				</p>
				<p>
					<label htmlFor="photo">photo :</label>
					<input
						type="file"
						id="photo"
						// si un véhicule est ajouté, le champs est boligatoire
						// si un véhicule est modifié, le champs est optionnnel
						{...register(
							"photo",
							id ? {} : { required: "La photo du véhicule est requis" },
						)}
					/>
					<span>{errors?.photo?.message}</span>
				</p>

				<p>
					<label htmlFor="brand">Marque :</label>
					<select
						id="brand"
						{...register("brand_id", {
							required: "La marque du véhicule est requise",
						})}
					>
						<option value="" />
						{brands.map((data) => (
							<option key={Math.random()} value={data.id}>
								{data.name}
							</option>
						))}
					</select>

					<span>{errors?.brand_id?.message}</span>
				</p>
				<div>
					<p>Options :</p>
					{options.map((data) => (
						<p key={Math.random()}>
							<label>
								<input
									type="checkbox"
									value={data.id}
									{...register("options_id", {
										required: "Options are required ",
									})}
								/>
								{data.name}
							</label>
						</p>
					))}

					<span>{errors?.options_id?.message}</span>
				</div>
				{/* la valeur du champs id est récupérer à partir de la variable de route */}
				<input type="hidden" value={id} {...register("id")} />
				<button className="btn" type="submit">
					Ajouter un nouveau véhicule.
				</button>
			</form>

			<NoticeMessage />
		</main>
	);
};

export default AdminVehiculeFormPage;
