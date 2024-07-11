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

class Server {
	// propriétés
	private app: Express = express();
	private router: Router = express.Router();

	// constructeur
	constructor() {
		// activer le middleware JSON, permet d'accéder à la propriété body de la requete HTTP au format JSON
		this.router.use(express.json());
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

		// le routeur NotFound doit etre obligatoirement appeleé en dernière position
		this.router.use("*", new NotFoundRouter().getRouter());
	};

	public createServer = (): http.Server => {
		return http.createServer(this.app);
	};
}

export default Server;
