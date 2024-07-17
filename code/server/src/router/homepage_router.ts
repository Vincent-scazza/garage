import express, { Request, Response, type Router } from "express";
import HomepageController from "../controller/homepage_controller.js";

class HomepageRouter {
	private router: Router = express.Router();

	public getRouter = (): Router => {
		/*
             lister les routes associées au préfixe du routeur
             une route est reliée à une URL et à méthode HTTP (GET, PUT, POST, DELETE)
        */
		this.router.get("/", new HomepageController().index);

		return this.router;
	};
}

export default HomepageRouter;
