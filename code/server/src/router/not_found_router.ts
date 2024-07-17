import express, { Request, Response, type Router } from "express";
import NotFoundController from "../controller/not_found_controller.js";

class NotFoundRouter {
	private router: Router = express.Router();

	public getRouter = (): Router => {
		/*
             lister les routes associées au préfixe du routeur
             une route est reliée à une URL et à méthode HTTP (GET, PUT, POST, DELETE)
        */
		this.router.get("/", new NotFoundController().index);

		return this.router;
	};
}

export default NotFoundRouter;
