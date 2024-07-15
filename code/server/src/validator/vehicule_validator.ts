import type Vehicule from "../model/vehicule.js";
import Joi, { options, type ValidationError } from "joi";

class VehiculeValidator {
	// valider les données d'un véhicule
	public async validate(data: Vehicule): Promise<unknown | ValidationError> {
		// contraintes de validation
		// reprendre les propriétés du modèle
		const constraints = Joi.object({
			id: Joi.number().positive().allow(),
			model: Joi.string().min(2).max(50).required(),
			price: Joi.number().greater(0).required(),
			brand_id: Joi.number().positive().required(),
			brand: Joi.object().allow(),
			options_id: Joi.string(),
			options: Joi.array(),
		});

		try {
			const validation = await constraints.validateAsync(data, {
				abortEarly: false,
			});

			return validation;
		} catch (error) {
			return error;
		}
	}
}

export default VehiculeValidator;
