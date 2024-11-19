const Expertise = () => {
	return (
		<section id="expertise" className="expertise-section container">
			<div className="expertise-content">
				<div className="expertise-text">
					<h2>Notre expertise à votre service</h2>
					<div className="expertise-points">
						<div className="point">
							<i className="bx bx-search-alt" />
							<div>
								<h3>Le meilleur prix</h3>
								<p>
									Une analyse objective des prix des véhicules pour vous aider à
									faire le bon choix.
								</p>
							</div>
						</div>
						<div className="point">
							<i className="bx bx-shield" />
							<div>
								<h3>En toute sérénité</h3>
								<p>
									Une visibilité complète sur l’historique et l’état du
									véhicule.
								</p>
							</div>
						</div>
						<div className="point">
							<i className="bx bx-euro" />
							<div>
								<h3>Adapté à votre budget</h3>
								<p>Un budget maîtrisé grâce à notre expertise.</p>
							</div>
						</div>
						<div className="point">
							<i className="bx bx-support" />
							<div>
								<h3>Vous conseiller</h3>
								<p>
									Des conseils personnalisés pour anticiper les entretiens à
									prévoir.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Expertise;
