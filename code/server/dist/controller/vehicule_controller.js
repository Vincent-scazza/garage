import VehiculeRepository from "../repository/vehicule_repository.js";
class VehiculeController {
    vehiculeRepository = new VehiculeRepository();
    // CLASSE index
    // méthodes appelées par le routeur
    index = async (req, res) => {
        const results = await this.vehiculeRepository.selectALL();
        // console.log(results);
        // si une erreur esr renvoyée
        if (results instanceof Error) {
            // en environnnement de développement
            return process.env.NODE_ENV === "dev"
                ? res.status(400).json(results)
                : res.status(400).json({
                    status: 400,
                    message: "Error",
                });
        }
        return res.status(200).json({
            status: 200,
            message: "OK",
            data: results,
        });
    };
    //CLASSE one
    // méthodes appelées par le routeur
    one = async (req, res) => {
        // req.params permet de récupérer les variables de route
        // console.log(req.params);
        const results = await this.vehiculeRepository.selectOne(req.params);
        // si une erreur esr renvoyée
        if (results instanceof Error) {
            // en environnnement de développement
            return process.env.NODE_ENV === "dev"
                ? res.status(400).json(results)
                : res.status(400).json({
                    status: 400,
                    message: "Error",
                });
        }
        return res.status(200).json({
            status: 200,
            message: "OK",
            data: results,
        });
    };
    create = async (req, res) => {
        // console.log(req.body);
        // req.body permet derécuperer les données contenues dans la propriété body de la requete HTTP
        const results = await this.vehiculeRepository.create(req.body);
        // req.params permet de récupérer les variables de route
        // si une erreur esr renvoyée
        if (results instanceof Error) {
            // en environnnement de développement
            return process.env.NODE_ENV === "dev"
                ? res.status(400).json(results)
                : res.status(400).json({
                    status: 400,
                    message: "Error",
                });
        }
        return res.status(201).json({
            status: 201,
            message: "Vehicule created",
            data: results,
        });
    };
    update = async (req, res) => {
        // regrouper l'identifiant contenu dans L-URL (req.paraps) avec les données de mise a jour contenues dans la propriété body de la requete HTTP
        const data = { ...req.body, id: req.params.id };
        const results = await this.vehiculeRepository.update(data);
        if (results instanceof Error) {
            return process.env.NODE_ENV === "dev"
                ? res.json(results)
                : res.status(400).json({
                    status: 400,
                    message: "Error",
                });
        }
        return res.status(200).json({
            status: 200,
            message: "Vehicule updated",
        });
    };
    delete = async (req, res) => {
        const results = await this.vehiculeRepository.delete({
            id: req.params.id,
        });
        if (results instanceof Error) {
            return process.env.NODE_ENV === "dev"
                ? res.json(results)
                : res.status(400).json({
                    status: 400,
                    message: "Error",
                });
        }
        return res.status(200).json({
            status: 200,
            message: "Vehicule deleted",
        });
    };
}
export default VehiculeController;
