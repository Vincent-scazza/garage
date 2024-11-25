import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registerUser } from "../../service/security_api";

// gérer le formulaire
const RegisterText = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	// useNavigate permet de changer de route
	const Navigate = useNavigate();

	// soumission du formulaire
	// parametre data permet de récuperer la saisie du formulaire
	const submit = async (data) => {
		// enregistre l'utilisateur
		const results = await registerUser(data);
		// si l'enregistrement a été effectué
		if (results.status === 201) {
			// stocker le message dans la session
			window.sessionStorage.setItem("notice", "Enregistrement effectuer");

			// redirection vers une route
			Navigate("/");
		}
	};

	return (
		<>
			<div className="inscrire">
				<div id="connexion">
					<h2 className="noir">Inscription</h2>
					<form onSubmit={handleSubmit(submit)}>
						<label htmlFor="email">Email</label>
						{/* register remplace l'attribut HTMLname */}
						<input
							type="email"
							id="email"
							{...register("email", { required: "Email est requis" })}
							span
							placeholder="Votre email"
						/>
						<span>{errors?.email?.message}</span>

						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							t
							{...register("password", { required: "MDP requis" })}
							placeholder="Votre mot de passe"
						/>
						<span>{errors?.password?.message}</span>

						<button className="btn" type="submit">
							Inscription
						</button>
					</form>
					<div className="toggle">
						<p>
							Pas encore inscrit ? <Link to="#">Inscrivez-vous ici</Link>
						</p>
					</div>
				</div>

				<div id="inscription" style={{ display: "none" }}>
					<h2 className="noir">Inscription</h2>
					<form action="/register" method="POST">
						<label htmlFor="fullname">Nom complet</label>
						<input
							type="text"
							id="fullname"
							name="fullname"
							required
							placeholder="Votre nom complet"
						/>

						<label htmlFor="email-register">Adresse Email</label>
						<input
							type="email"
							id="email-register"
							name="email"
							required
							placeholder="Votre email"
						/>

						<label htmlFor="password-register">Mot de passe</label>
						<input
							type="password"
							id="password-register"
							name="password"
							required
							placeholder="Votre mot de passe"
						/>

						<button type="submit">S'inscrire</button>
					</form>
					<div className="toggle">
						<p>
							Déjà inscrit ? <Link to="#">Connectez-vous ici</Link>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default RegisterText;
