const AuthPopUp = () => {
	return (
		<aside id="auth-popup" className="popup hidden">
			<div className="popup-content">
				<button
					className="close-btn"
					aria-label="Fermer"
					onclick="togglePopup()"
					type="button"
				>
					×
				</button>
				<div className="popup-forms">
					{/* <!-- Formulaire de connexion --> */}
					<form id="login-form" className="auth-form">
						<h2>Connexion</h2>
						<input type="email" placeholder="Adresse email" required />
						<input type="password" placeholder="Mot de passe" required />
						<button type="submit" className="popup-btn">
							Se connecter
						</button>
						<p className="popup-link" onclick="showForgotPassword()">
							Mot de passe oublié ?
						</p>
						<p className="popup-link">
							Pas encore inscrit ?{" "}
							<span onclick="showSignup()">S'inscrire</span>
						</p>
					</form>
					{/* 
            <!-- Formulaire d'inscription --> */}
					<form id="signup-form" className="auth-form hidden">
						<h2>Inscription</h2>
						<input type="text" placeholder="Nom complet" required />
						<input type="email" placeholder="Adresse email" required />
						<input type="password" placeholder="Mot de passe" required />
						<button type="submit" className="popup-btn">
							S'inscrire
						</button>
						<p className="popup-link">
							Déjà un compte ? <span onclick="showLogin()">Se connecter</span>
						</p>
					</form>

					{/* <!-- Formulaire "Mot de passe oublié" --> */}
					<form id="forgot-password-form" className="auth-form hidden">
						<h2>Mot de passe oublié</h2>
						<input type="email" placeholder="Adresse email" required />
						<button type="submit" className="popup-btn">
							Envoyer le lien
						</button>
						<p className="popup-link" onclick="showLogin()">
							Retour à la connexion
						</p>
					</form>
				</div>
			</div>
		</aside>
	);
};

export default AuthPopUp;
