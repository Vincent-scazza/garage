const PopularBrands = () => {
	return (
		<section id="popular-brands" class="brands-section container">
			<h2>Les marques les plus populaires</h2>
			<div class="brands-carousel">
				<article class="brand" onclick="filterByBrand('Audi')">
					<h3>Audi</h3>
					<img src="assests/img/logo_Audi.png" alt="Logo Audi" />
				</article>
				<article class="brand" onclick="filterByBrand('BMW')">
					<h3>BMW</h3>
					<img src="assests/img/BMW-Logo.jpg" alt="Logo BMW" />
				</article>
				<article class="brand" onclick="filterByBrand('Mercedes')">
					<h3>Mercedes</h3>
					<img src="assests/img/Logo_Mercedes.jpg" alt="Logo Mercedes" />
				</article>
				<article class="brand" onclick="filterByBrand('Peugeot')">
					<h3>Peugeot</h3>
					<img src="assests/img/peugeot_logo.webp" alt="Logo Peugeot" />
				</article>
				<article class="brand" onclick="filterByBrand('Renault')">
					<h3>Renault</h3>
					<img src="assests/img/logo-Renault-.jpg" alt="Logo Renault" />
				</article>
			</div>
		</section>
	);
};

export default PopularBrands;
