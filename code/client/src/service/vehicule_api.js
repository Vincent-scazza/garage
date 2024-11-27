// récupération de tous les véhicules
const selectAllVehicule = async () => {
	// configure la requete HTTP
	const request = new Request(`${import.meta.env.VITE_API_URL}/vehicule`);

	// récupere la réponse
	const response = await fetch(request);

	// récuperer les données JSON contenues dans la réponse
	const data = await response.json();

	// retourner les données JSON
	return data;
};

// récupération de tous les véhicules
const selectOneVehicule = async (id) => {
	// configure la requete HTTP
	const request = new Request(`${import.meta.env.VITE_API_URL}/vehicule/${id}`);

	// récupere la réponse
	const response = await fetch(request);

	// récuperer les données JSON contenues dans la réponse
	const data = await response.json();

	// retourner les données JSON
	return data;
};

// créer un véhicule
const CreateVehicule = async (token, formType) => {
	// configure la requete HTTP

	/* 
		2 cas :
		-formulaire sans image :
			utliser l'en-tete Content-Type: application/json
			utiliser JSON.stringify sur les données du formulaire, avec body
		- formulaire avec fichier
			ne pas utiliser Content-Type: application/json
			avec body, créer un objet FormData avec chaque champ du formulaire 
	
	*/

	// stocker la saisie dans un objet FormData

	const formData = new FormData();
	formData.set("id", formType.id);
	formData.set("model", formType.model);
	formData.set("price", formType.price);
	formData.set("photo", formType.photo[0]);
	formData.set("brand_id", formType.brand_id);
	formData.set("options_id", formType.options_id);

	const request = new Request(`${import.meta.env.VITE_API_URL}/vehicule`, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
		},
		body: formData,
	});

	// récupere la réponse
	const response = await fetch(request);

	// récuperer les données JSON contenues dans la réponse
	const data = await response.json();

	// retourner les données JSON
	return data;
};

export { CreateVehicule, selectAllVehicule, selectOneVehicule };
