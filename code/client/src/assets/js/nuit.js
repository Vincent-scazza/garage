export const nuit = () => {
	// Fonction pour basculer entre les thèmes clair et sombre
	function toggleTheme() {
		const body = document.body;
		const themeIcon = document.getElementById("theme-icon");

		body.classList.toggle("dark-theme");

		if (body.classList.contains("dark-theme")) {
			themeIcon.classList.replace("bx-sun", "bx-moon");
		} else {
			themeIcon.classList.replace("bx-moon", "bx-sun");
		}
	}
};
