import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { selectAllBrand } from "../../service/brand_api";
import { CreateVehicule } from "../../service/vehicule_api";
import { selectAllOptions } from "../../service/options_api";
import { authUser } from "../../service/security_api";
import { UserContext } from "../../provider/UserProvider";
import NoticeMessage from "../../component/common/NoticeMessage";

const AdminVehiculeFormPage = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	// useNavigate
	const navigate = useNavigate();

	// récupérer les marques et les options
	const [brands, setBrands] = useState([]);
	const [options, setOptions] = useState([]);

	useEffect(() => {
		selectAllBrand().then((results) => setBrands(results.data));
		selectAllOptions().then((results) => setOptions(results.data));
	}, []);

	// récupérer l'utilisateur stocké dans le contexte
	const { user, setUser } = useContext(UserContext);

	const onSubmit = async (data) => {
		console.log(data);

		// authentification
		const authentication = await authUser(user);

		// console.log(authentication.data.token);

		// créer un véhicule
		const results = await CreateVehicule(authentication.data.token, data);

		// si le véhicule a été crée
		if (results.status === 201) {
			// stocker le message dans la session
			window.sessionStorage.setItem("notice", "Vehicule created");

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
						{...register("photo", {
							required: "La photo du véhicule est requis",
						})}
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
				<input type="hidden" value="" {...register("id")} />
				<button className="btn" type="submit">
					Ajouter un nouveau véhicule.
				</button>
			</form>

			<NoticeMessage />
		</main>
	);
};

export default AdminVehiculeFormPage;
