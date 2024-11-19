const PopularBrands = () => {
	return (
		<section id="popular-brands" className="brands-section container">
			<h2>Les marques les plus populaires</h2>
			<div className="brands-carousel">
				<article className="brand" onclick="filterByBrand('Audi')">
					<h3>Audi</h3>
					<img src="/img/logo_Audi.png" alt="Logo Audi" />
				</article>
				<article className="brand" onclick="filterByBrand('BMW')">
					<h3>BMW</h3>
					<img src="/img/BMW-Logo.jpg" alt="Logo BMW" />
				</article>
				<article className="brand" onclick="filterByBrand('Mercedes')">
					<h3>Mercedes</h3>
					<img src="/img/Logo_Mercedes.jpg" alt="Logo Mercedes" />
				</article>
				<article className="brand" onclick="filterByBrand('Peugeot')">
					<h3>Peugeot</h3>
					<img src="/img/peugeot_logo.webp" alt="Logo Peugeot" />
				</article>
				<article className="brand" onclick="filterByBrand('Renault')">
					<h3>Renault</h3>
					<img src="/img/logo-Renault-.jpg" alt="Logo Renault" />
				</article>
			</div>
		</section>
	);
};

export default PopularBrands;
