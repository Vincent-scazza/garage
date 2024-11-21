import express, {
	type Router,
	type Express,
	type Request,
	type Response,
} from "express";

import http from "node:http";
import HomepageRouter from "../router/homepage_router.js";
import NotFoundRouter from "../router/not_found_router.js";
import BrandRouter from "../router/brand_router.js";
import VehiculeRouter from "../router/vehicule_router.js";
import SecurityRouter from "../router/security_router.js";
import cors from "cors";
import OriginnMiddleware from "../middleware/security/originMiddleware.js";
import ContactRouter from "../router/contact_router.js";

class Server {
	// propriétés
	private app: Express = express();
	private router: Router = express.Router();

	// constructeur
	constructor() {
		// activer le middleware JSON, permet d'accéder à la propriété body de la requete HTTP au format JSON
		this.router.use(express.json());
		this.router.use(express.static("public"));

		// gérer CORS
		this.router.use(
			cors({
				origin: process.env.ORIGINS?.split(","),
			}),
		);

		// vérifier l'origine de ma requete
		this.router.use(new OriginnMiddleware().check);

		// lier le router a l'application
		this.app.use(this.router);

		this.listRouter();
	}
	// méthodes
	private listRouter = (): void => {
		/*
           appel d'un routeur :
           -préfixe de toutes les routes conteneur dans le routeur
           -routeur
        */
		this.router.use("/", new HomepageRouter().getRouter());
		this.router.use("/brand", new BrandRouter().getRouter());
		this.router.use("/vehicule", new VehiculeRouter().getRouter());
		this.router.use("/brand", new BrandRouter().getRouter());
		this.router.use("/", new SecurityRouter().getRouter());
		this.router.use("/contact", new ContactRouter().getRouter());

		// le routeur NotFound doit etre obligatoirement appeleé en dernière position
		this.router.use("*", new NotFoundRouter().getRouter());
	};

	public createServer = (): http.Server => {
		return http.createServer(this.app);
	};
}

export default Server;
