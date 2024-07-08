import BrandRepository from "../repository/brand_repository.js";
class BrandController {
    BrandRepository = new BrandRepository();
    // CLASSE index 
    // méthodes appelées par le routeur
    index = async (req, res) => {
        const results = await this.BrandRepository.selectALL();
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
        console.log(req.params);
        const results = await this.BrandRepository.selectOne(req.params);
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
}
export default BrandController;
