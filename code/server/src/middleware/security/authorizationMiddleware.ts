import type { NextFunction, Request, Response } from "express";
import jwt, { JsonWebTokenError, type JwtPayload } from "jsonwebtoken";

class AuthorizationMiddleware {
	// méthodes recevant la liste des role autorisés
	public Authorize = (roles: string[]) => {
		//console.log(roles);

		//retourner un middleware
		return (req: Request, res: Response, next: NextFunction) => {
			// récupérer le token contenu dans l'en-tete authorization
			const token = (req.headers.authorization as string).split(" ")[1];

			// vérifier la validité du token
			try {
				const verifyToken = jwt.verify(token, process.env.SECRET as string);
			} catch (error) {
				return res.status(401).json({
					status: 401,
					message: "Unauthorized",
				});
			}

			// récupérer le payload du token
			const data: JwtPayload = jwt.decode(token) as JwtPayload;

			// vérification des autorization
			// if (data.user.role.name !== "admin") {

			// chercher le role des utlisateur dans la liste des role attribué
			if (roles.indexOf(data.user.role.name) === -1) {
				return res.status(401).json({
					status: 401,
					message: "Unauthorized",
				});
			}

			// passer au middleware suivant
			next();
		};
	};
}

export default AuthorizationMiddleware;
