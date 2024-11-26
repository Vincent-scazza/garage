import Joi from "joi";
class VehiculeValidator {
    // valider les données d'un véhicule
    async validate(data) {
        // contraintes de validation
        // reprendre les propriétés du modèle
        const constraints = Joi.object({
            id: Joi.number().min(0).allow(""),
            model: Joi.string().min(2).max(50).required(),
            price: Joi.number().greater(0).required(),
            photo: Joi.string().allow(),
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
        }
        catch (error) {
            return error;
        }
    }
}
export default VehiculeValidator;
