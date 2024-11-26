export const nuit = () => {
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
