const NewsLetter = () => {
	return (
		<section
			id="newsletter"
			className="newsletter-section"
			aria-label="Inscription à la newsletter"
		>
			<div className="newsletter-content">
				<h2>Soyez le premier informé de nos meilleures offres</h2>
				<form className="newsletter-form">
					<div className="form-row">
						<label htmlFor="prenom" className="visually-hidden"></label>
						<input
							type="text"
							id="prenom"
							placeholder="Votre prénom"
							required
						/>
						<label htmlFor="nom" className="visually-hidden"></label>
						<input type="text" id="nom" placeholder="Votre nom" required />
					</div>
					<label htmlFor="email" className="visually-hidden"></label>
					<input
						type="email"
						id="email"
						placeholder="Votre e-mail"
						className="email-input"
						required
					/>
					<button type="submit">Valider</button>
				</form>
			</div>
		</section>
	);
};

export default NewsLetter;
