import express, { Request, Response, type Router } from "express";
import VehiculeController from "../controller/vehicule_controller.js";

class VehiculeRouter {
	private router: Router = express.Router();

	public getRouter = (): Router => {
		/*
             lister les routes associées au préfixe du routeur
             une route est reliée à une URL et à méthode HTTP (GET, PUT, POST, DELETE)
        */
		this.router.get("/", new VehiculeController().index);

		// route avec une variable de route; procédée d'un :
		this.router.get("/:id", new VehiculeController().one);

		// route pour créer un véhicule
		this.router.post("/", new VehiculeController().create);

		// route pour créer un véhicule
		this.router.put("/:id", new VehiculeController().update);

		// route pour créer un véhicule
		this.router.delete("/:id", new VehiculeController().delete);

		return this.router;
	};
}

export default VehiculeRouter;