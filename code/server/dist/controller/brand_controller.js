import BrandRepository from "../repository/brand_repository.js";
class BrandController {
    BrandRepository = new BrandRepository();
    // méthodes appelées par le routeur
    // public index = (req: Request, res: Response): Response => {
    //     return res.send("brand controller vincent");
    // };
    selectAll = async (req, res) => {
        const results = await this.BrandRepository.selectALL();
        if (results instanceof Error) {
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
