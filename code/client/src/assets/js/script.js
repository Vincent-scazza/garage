export const Script = () =>
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
	};

// Fonction pour activer/désactiver le menu burger
function toggleMenu() {
	document.getElementById("nav-links").classList.toggle("active");
	document.getElementById("menu-burger").classList.toggle("active");
}

// Gestion du carrousel infini
document.addEventListener("DOMContentLoaded", () => {
	const carouselTrack = document.querySelector(".carousel-track");
	const carouselItems = document.querySelectorAll(".carousel-item");
	const totalItems = carouselItems.length;

	// Dupliquer les items pour un effet de défilement continu
	carouselTrack.innerHTML += carouselTrack.innerHTML;

	let position = 0;

	function animateCarousel() {
		position -= 1; // Vitesse de défilement
		carouselTrack.style.transform = `translateX(${position}px)`;

		// Réinitialiser la position pour un défilement infini
		if (Math.abs(position) >= carouselTrack.scrollWidth / 2) {
			position = 0;
		}

		requestAnimationFrame(animateCarousel);
	}

	animateCarousel();
});

// Gestion des formulaires du pop-up d'authentification
function showLogin() {
	document.getElementById("login-form").classList.remove("hidden");
	document.getElementById("signup-form").classList.add("hidden");
}

function showSignup() {
	document.getElementById("signup-form").classList.remove("hidden");
	document.getElementById("login-form").classList.add("hidden");
}

// Fermeture du pop-up en cliquant en dehors du contenu
window.addEventListener("click", (event) => {
	const popup = document.getElementById("auth-popup");
	if (event.target == popup) {
		togglePopup();
	}
});

// Optionnel : Validation du formulaire de newsletter
document
	.querySelector(".newsletter-form")
	.addEventListener("submit", (event) => {
		event.preventDefault();
		// Ajoutez ici le code pour gérer l'inscription à la newsletter
		alert("Merci pour votre inscription à la newsletter!");
	});

// Fonction pour afficher/masquer le pop-up
function togglePopup() {
	const popup = document.getElementById("auth-popup");
	popup.classList.toggle("hidden");
}

// Fonction pour basculer entre le formulaire de connexion et d'inscription
function showSignup() {
	// Votre code pour afficher le formulaire d'inscription
}

// Si vous avez un formulaire d'inscription, assurez-vous qu'il est également présent dans votre HTML
// Fonction pour afficher/masquer le pop-up
function togglePopup() {
	const popup = document.getElementById("auth-popup");
	popup.classList.toggle("hidden");
}

// Afficher le formulaire de connexion
function showLogin() {
	document.getElementById("login-form").classList.remove("hidden");
	document.getElementById("signup-form").classList.add("hidden");
	document.getElementById("forgot-password-form").classList.add("hidden");
}

// Afficher le formulaire d'inscription
function showSignup() {
	document.getElementById("signup-form").classList.remove("hidden");
	document.getElementById("login-form").classList.add("hidden");
	document.getElementById("forgot-password-form").classList.add("hidden");
}

// Afficher le formulaire "Mot de passe oublié"
function showForgotPassword() {
	document.getElementById("forgot-password-form").classList.remove("hidden");
	document.getElementById("login-form").classList.add("hidden");
	document.getElementById("signup-form").classList.add("hidden");
}

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

// Fonction pour activer/désactiver le menu burger
function toggleMenu() {
	document.getElementById("nav-links").classList.toggle("active");
	document.getElementById("menu-burger").classList.toggle("active");
}

// Gestion du carrousel infini
document.addEventListener("DOMContentLoaded", () => {
	const carouselTrack = document.querySelector(".carousel-track");
	const carouselItems = document.querySelectorAll(".carousel-item");

	// Dupliquer les items pour un effet de défilement continu
	carouselTrack.innerHTML += carouselTrack.innerHTML;

	let position = 0;

	function animateCarousel() {
		position -= 1; // Vitesse de défilement
		carouselTrack.style.transform = `translateX(${position}px)`;

		// Réinitialiser la position pour un défilement infini
		if (Math.abs(position) >= carouselTrack.scrollWidth / 2) {
			position = 0;
		}

		requestAnimationFrame(animateCarousel);
	}

	animateCarousel();
});

// Fermeture du pop-up en cliquant en dehors du contenu
window.addEventListener("click", (event) => {
	const popup = document.getElementById("auth-popup");
	if (event.target == popup) {
		togglePopup();
	}
});

// ================= QR CODE ===================//

new QRCode(document.getElementById("qrcode-audi"), {
	text: "http://127.0.0.1:5500/http://127.0.0.1:5500/index.html",
	width: 150,
	height: 150,
	colorDark: "#000000",
	colorLight: "#ffffff",
});
