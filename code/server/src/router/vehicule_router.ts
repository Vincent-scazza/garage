import express, { Request, Response, type Router } from "express";
import VehiculeController from "../controller/vehicule_controller.js";
import VehiculeValidatorMiddelware from "../middleware/validator/vehicule_validator_middleware.js";
import AuthorizationMiddleware from "../middleware/security/authorizationMiddleware.js";
import multer, { Multer } from "multer";
import VehiculeFileMiddleware from "../middleware/vehicule_file_Middleware.js";

class VehiculeRouter {
	private router: Router = express.Router();

	// définir le dosssier de transfert des images
	private upload: multer.Multer = multer({
		dest: `${process.env.ASSETS_DIRECTORY}/img`,
	});

	public getRouter = (): Router => {
		/*
             lister les routes associées au préfixe du routeur
             une route est reliée à une URL et à méthode HTTP (GET, PUT, POST, DELETE)
        */
		this.router.get("/", new VehiculeController().index);

		// route avec une variable de route; procédée d'un :
		this.router.get("/:id", new VehiculeController().one);

		// route pour créer un véhicule
		// ajout d'un middleware de validation
		// middleware any de multer permet d'accéder aux fichiers transférés avec req.files
		this.router.post(
			"/",
			this.upload.any(),
			new VehiculeFileMiddleware().process,
			new AuthorizationMiddleware().Authorize(["admin"]),
			new VehiculeValidatorMiddelware().filter,
			new VehiculeController().create,
		);

		// route pour modifier un vehicule
		this.router.put("/:id", new VehiculeController().update);

		// route pour supprimer un véhicule
		this.router.delete("/:id", new VehiculeController().delete);

		return this.router;
	};
}

export default VehiculeRouter;
