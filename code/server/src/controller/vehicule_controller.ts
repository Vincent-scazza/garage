import { Request, Response } from "express";
import { RowDataPacket } from "mysql2/promise";
import VehiculeRepository from "../repository/vehicule_repository.js";

class VehiculeController {
    private vehiculeRepository: VehiculeRepository = new VehiculeRepository();

    // CLASSE index 

    // méthodes appelées par le routeur
    public index = async (req: Request, res: Response): Promise<Response> => {
        const results = await this.vehiculeRepository.selectALL();
        
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
    
    }

    //CLASSE one
    
        // méthodes appelées par le routeur
    public one = async (req: Request, res: Response): Promise<Response> => { 
        // req.params permet de récupérer les variables de route

        console.log(req.params);
        

        const results: RowDataPacket | unknown = await this.vehiculeRepository.selectOne(req.params);
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
    
export default VehiculeController;