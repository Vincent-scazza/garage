import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginUser } from "../../service/security_api";
import { useContext } from "react";
import { UserContext } from "../../provider/UserProvider";

// gérer le formulaire
const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	// useNavigate permet de changer de route
	const Navigate = useNavigate();

	// useContext permet d'accéder aux données
	const { user, setUser } = useContext(UserContext);

	const submit = async (data) => {
		// 	// enregistre l'utilisateur
		const results = await loginUser(data);
		// 	// si l'enregistrement a été effectué
		if (results.status === 200) {
			// 		// stocker le message dans la session
			window.sessionStorage.setItem("notice", "Connexion effectuer");

			// stocker l'utilisateur dans le contexte
			setUser(results.data);

			// 		// redirection vers une route
			Navigate("/");
		}
	};

	return (
		<>
			<div className="inscrire">
				<div id="connexion">
					<h2 className="noir">Connexion</h2>
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

						<button className="bb" type="submit">
							Se connecter
						</button>
					</form>
					<div className="toggle">
						<p>
							Pas encore inscrit ?{" "}
							<Link to="/RegisterPage">Inscrivez-vous ici</Link>
						</p>
					</div>
				</div>

				<div className="inscrire" style={{ display: "none" }}>
					<h2>Inscription</h2>
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

						<button className="bb" type="submit">
							Inscription
						</button>
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

export default Login;
