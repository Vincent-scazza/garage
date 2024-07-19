import type { Request, Response, NextFunction } from "express";

class OriginnMiddleware {
	public check = (req: Request, res: Response, next: NextFunction) => {
		// récuperer le protocole (http / https)
		// const protocol: string = req.protocol;

		// récupérer l'hote
		const hostname: string = req.hostname;
		// console.log(protocol,host);

		// récuperer l'origine
		const origin: string = req.get("origin") as string;

		// liste des origines autorisées
		const listOrigins = (process.env.ORIGINS as string).split(",");

		// vérifier la présence de l'origine dans la lsite
		if (
			listOrigins.indexOf(origin) === -1
			// && hostname !== 'localhost'
			// && hostname !== '127.0.0.1'
		) {
			return res.status(403).json({
				status: 403,
				message: "forbiden",
			});
		}

		//  passser au middleware suivant
		next();
	};
}

export default OriginnMiddleware;
