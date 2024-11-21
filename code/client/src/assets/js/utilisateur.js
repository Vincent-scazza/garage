




// Fonction pour activer/désactiver le menu burger
function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("active");
    document.getElementById("menu-burger").classList.toggle("active");
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

    document.querySelector('form').addEventListener('submit', function (event) {
        const checkboxes = document.querySelectorAll('input[name="preferred_car_brands[]"]');
        let isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

        if (!isChecked) {
            event.preventDefault();
            alert("Veuillez sélectionner au moins une marque.");
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