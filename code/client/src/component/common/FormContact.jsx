import contact from "../../service/contact_api";

const FormContact = () => {
	return (
		<>
			<section id="contact-form-section" className="contact-form-section">
				<div className="contact-form-container">
					<h2>Envoyez-nous un message</h2>
					<p>
						Vous avez des questions ou des suggestions ? N'hésitez pas à nous
						écrire, nous vous répondrons rapidement.
					</p>
					<form action="submit_form.php" method="POST" className="contact-form">
						<label htmlFor="name">Nom :</label>
						<input
							type="text"
							id="name"
							name="name"
							placeholder="Entrez votre nom"
							required
						/>

						<label htmlFor="email">E-mail :</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Entrez votre e-mail"
							required
						/>

						<label htmlFor="message">Message :</label>
						<textarea
							id="message"
							name="message"
							rows="5"
							placeholder="Votre message"
							required
						></textarea>

						<button type="submit" className="btn-submit">
							Envoyer
						</button>
					</form>
				</div>
			</section>

			<section>
				<article className="contact-info">
					<h2>Informations de contact</h2>
					<p>
						<i className="bx bx-map"></i> 9 Villa des Roitelets, Villepinte,
						France
					</p>
					<p>
						<i className="bx bx-phone"></i>{" "}
						<a href="tel:+33647380151">+33 6 47 38 01 51</a>
					</p>
					<p>
						<i className="bx bx-envelope"></i> contact@ownmycar.fr
					</p>
					<p>
						<i className="bx bx-time"></i> Lundi - Vendredi : 9h00 - 18h00
					</p>
				</article>
			</section>
		</>
	);
};

export default FormContact;
