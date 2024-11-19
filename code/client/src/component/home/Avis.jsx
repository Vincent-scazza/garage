const Avis = () => {
	return (
		<section id="reviews" className="reviews-section container">
			<h2>Ce que disent nos clients</h2>
			<div className="reviews-container">
				<blockquote className="review">
					<p>
						Un excellent rapport qualité-prix ! J'ai pu trouver une voiture
						adaptée à mon budget en quelques clics. Bravo pour la simplicité de
						la plateforme !
					</p>
					<cite>- Jean Dupont</cite>
				</blockquote>
				<blockquote className="review">
					<p>
						Une équipe très professionnelle et disponible. Ils ont répondu à
						toutes mes questions et ont su me conseiller pour mon choix de
						véhicule.
					</p>
					<cite>- Marie Leclerc</cite>
				</blockquote>
				<blockquote className="review">
					<p>
						Grande disponibilité de voitures, avec des options intéressantes. Je
						recommande!
					</p>
					<cite>- Ahmed Ben Ali</cite>
				</blockquote>
			</div>
		</section>
	);
};

export default Avis;
