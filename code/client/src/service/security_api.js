// enregistrer un utilisateur
const registerUser = async (FormData) => {
	const request = new Request(`${import.meta.env.VITE_API_URL}/register`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(FormData),
	});
	const response = await fetch(request);
	const data = await response.json();
	return data;
};
// connexion
const loginUser = async (FormData) => {
	const request = new Request(`${import.meta.env.VITE_API_URL}/login`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(FormData),
	});
	const response = await fetch(request);
	const data = await response.json();
	return data;
};

export { registerUser, loginUser };
