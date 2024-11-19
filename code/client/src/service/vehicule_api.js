// récupération de tous les véhicules
const selectAllVehicule = async () => {
	// configure la requete HTTP
	const request = new Request(`${import.meta.env.VITE_APi_URL}/vehicule`);

	// récupere la réponse
	const response = await fetch(request);

	// récuperer les données JSON contenues dans la réponse
	const data = await response.json();

	// retourner les données JSON
	return data;
};

export { selectAllVehicule };
