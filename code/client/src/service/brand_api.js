// récupération de tous les marques
const selectAllBrand = async () => {
	// configure la requete HTTP
	const request = new Request(`${import.meta.env.VITE_API_URL}/brand`);

	// récupere la réponse
	const response = await fetch(request);

	// récuperer les données JSON contenues dans la réponse
	const data = await response.json();

	// retourner les données JSON
	return data;
};

export { selectAllBrand };
