import VehiculeValidator from "../../validator/vehicule_validator.js";
class VehiculeValidatorMiddelware {
    // vérifier les contraites de validation
    filter = async (req, res, next) => {
        // console.log("middleware");
        // valider la propriété body selon les contraintes de validation
        const validation = await new VehiculeValidator().validate(req.body);
        // si une erreur de validation est renvoyée
        if (validation instanceof Error) {
            return res.status(400).json({
                status: 400,
                message: "Error",
                data: validation.details.map((value) => value.message),
            });
        }
        console.log(validation);
        // passer au middleware
        next();
    };
}
export default VehiculeValidatorMiddelware;
