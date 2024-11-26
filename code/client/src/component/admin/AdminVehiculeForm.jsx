import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../provider/UserProvider";
import { createVehicle } from "../../service/vehicle_api";

const AdminVehiculeForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	// useNavigate permet de rediriger après la soumission
	const Navigate = useNavigate();

	// useContext pour accéder au contexte utilisateur
	const { user } = useContext(UserContext);

	const submit = async (data) => {
		// Appel à l'API pour créer un véhicule
		const results = await createVehicle(data);

		// Vérification du succès
		if (results.status === 201) {
			// Message de confirmation
			window.sessionStorage.setItem("notice", "Véhicule créé avec succès");

			// Redirection vers la liste des véhicules
			Navigate("/admin/vehicules");
		} else {
			alert("Erreur lors de la création du véhicule");
		}
	};

	return (
		<div className="admin-form">
			<h2>Créer un véhicule</h2>
			<form onSubmit={handleSubmit(submit)}>
				{/* Name */}
				<label htmlFor="name">Nom du véhicule</label>
				<input
					type="text"
					id="name"
					{...register("name", {
						required: "Le nom est requis",
						maxLength: 50,
					})}
					placeholder="Nom du véhicule"
				/>
				<span>{errors?.name?.message}</span>

				{/* Price */}
				<label htmlFor="price">Prix</label>
				<input
					type="number"
					id="price"
					step="0.01"
					{...register("price", {
						required: "Le prix est requis",
						min: { value: 0, message: "Le prix doit être positif" },
					})}
					placeholder="Prix du véhicule"
				/>
				<span>{errors?.price?.message}</span>

				{/* Photo */}
				<label htmlFor="photo">URL de la photo</label>
				<input
					type="text"
					id="photo"
					{...register("photo", { maxLength: 50 })}
					placeholder="Lien vers une photo"
				/>
				<span>{errors?.photo?.message}</span>

				{/* Brand */}
				<label htmlFor="brand_id">Marque</label>
				<select
					id="brand_id"
					{...register("brand_id", { required: "La marque est requise" })}
				>
					<option value="">Sélectionnez une marque</option>
					{/* Exemples de marques, à remplacer par une récupération dynamique */}
					<option value="1">Toyota</option>
					<option value="2">Honda</option>
					<option value="3">Ford</option>
				</select>
				<span>{errors?.brand_id?.message}</span>

				{/* Submit */}
				<button type="submit">Créer le véhicule</button>
			</form>
		</div>
	);
};

export default AdminVehiculeForm;
