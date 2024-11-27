const contact = async (FormData) => {
	const request = new Request(`${import.meta.env.VITE_API_URL}/contact`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(FormData),
	});
	const response = await fetch(request);
	const data = await response.json();
	return data;
};

export default contact;
