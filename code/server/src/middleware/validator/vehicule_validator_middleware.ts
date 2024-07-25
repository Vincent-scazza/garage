import type { NextFunction, Request, Response } from "express";
import VehiculeValidator from "../../validator/vehicule_validator.js";
import type Joi from "joi";
import type { ValidationError } from "joi";

class VehiculeValidatorMiddelware {
	// vérifier les contraites de validation
	public filter = async (req: Request, res: Response, next: NextFunction) => {
		// console.log("middleware");
		// valider la propriété body selon les contraintes de validation
		const validation = await new VehiculeValidator().validate(req.body);

		// si une erreur de validation est renvoyée
		if (validation instanceof Error) {
			return res.status(400).json({
				status: 400,
				message: "Error",
				data: (validation as ValidationError).details.map(
					(value: Joi.ValidationErrorItem) => value.message,
				),
			});
		}
		//console.log(validation);

		// passer au middleware
		next();
	};
}

export default VehiculeValidatorMiddelware;
