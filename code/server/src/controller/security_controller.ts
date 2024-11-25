import type { Request, Response } from "express";
import SecurityRepository from "../repository/security_repository.js";
import argon2 from "argon2";
import type { QueryResult } from "mysql2";
import type User from "../model/user.js";
import jwt from "jsonwebtoken";
import SimpleCrypto from "simple-crypto-js";

class SecurityController {
	private securityRepository: SecurityRepository = new SecurityRepository();

	// méthodes appelées par le routeur
	private _register = async (
		req: Request,
		res: Response,
	): Promise<Response> => {
		// hacher le mot de passe
		const hash = await argon2.hash(req.body.password);

		// remplacer le mot de passe contenue dans body par la version hachée
		req.body = { ...req.body, password: hash };

		const results = await this.securityRepository.register(req.body);
		// si une erreur esr renvoyée
		if (results instanceof Error) {
			// en environnnement de développement
			return process.env.NODE_ENV === "dev"
				? res.status(400).json(results)
				: res.status(400).json({
						status: 400,
						message: "Error",
					});
		}
		return res.status(200).json({
			status: 201,
			message: "Thank U",
			data: results,
		});
	};
	public get register() {
		return this._register;
	}

	public login = async (req: Request, res: Response): Promise<Response> => {
		// récupere l'utilisateur par son email
		const user: QueryResult | unknown =
			await this.securityRepository.getUserByEmail(req.body);
		// console.log(user);

		// si l'utilisateur nexiste pas
		if (user instanceof Error) {
			return res.status(400).json({
				status: 400,
				message: "error user does not exist",
			});
		}

		// // vérification du mot de passe : comparer le mot de passe saisi avec le hash contenu dans la base de données
		const isPasswordIsValid: boolean = await argon2.verify(
			(user as User).password as string,
			req.body.password,
		);

		if (!isPasswordIsValid) {
			return res.status(403).json({
				status: 403,
				message: "Forbidden",
			});
		}

		// crypter le mot de passe pour le stocker cote client
		// générer une partie de la clé de décryptage aléatoire
		const randomKey = SimpleCrypto.default.generateRandom();

		// clé complète de décryptage : partie aléatoire + partie stockée dans la variable d'environnement
		const key = `${randomKey}${process.env.KEY}`;

		// générer le cryptage
		const simpleCrypto = new SimpleCrypto.default(key);

		// crypter le mot de passe
		const passwordEncrypt = simpleCrypto.encrypt(req.body.password);

		// ajouter la clé aléatoire et le mot de passe crypté à l'utilisateur
		(user as User).key = randomKey;
		(user as User).password = passwordEncrypt;

		// si l'utilisateur existe est que le mdp est correcte
		return res.status(200).json({
			status: 200,
			message: "OK",
			data: user,
		});
	};

	public auth = async (req: Request, res: Response): Promise<Response> => {
		// récupere l'utilisateur par son email
		const user: QueryResult | unknown =
			await this.securityRepository.getUserByEmail(req.body);
		// console.log(user);

		// si l'utilisateur nexiste pas
		if (user instanceof Error) {
			return res.status(400).json({
				status: 400,
				message: "error user does not exist",
			});
		}

		// récupere une partie de la clé  aléatoire
		const randomKey = req.body.key;

		// clé complète de décryptage : partie aléatoire + partie stockée dans la variable d'environnement
		const key = `${randomKey}${process.env.KEY}`;

		// générer le cryptage
		const simpleCrypto = new SimpleCrypto.default(key);

		// décrypter le mot de passe
		const passwordDecrypt = simpleCrypto.decrypt(req.body.password);

		// // vérification du mot de passe : comparer le mot de passe saisi avec le hash contenu dans la base de données
		const isPasswordIsValid: boolean = await argon2.verify(
			(user as User).password as string,
			passwordDecrypt as string,
		);

		if (!isPasswordIsValid) {
			return res.status(403).json({
				status: 403,
				message: "Forbidden",
			});
		}

		// génerer un jeton sécurisé (JSON WEB TOKEN)
		const token = jwt.sign(
			{
				user: user,
			},
			process.env.SECRET as string,
			{
				expiresIn: 30,
			},
		);

		// si l'utilisateur existe est que le mdp est correcte
		return res.status(200).json({
			status: 200,
			message: "OK",
			data: {
				token: token,
			},
		});
	};
}

export default SecurityController;
