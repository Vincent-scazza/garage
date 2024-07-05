import { Request, Response } from "express";
import { RowDataPacket } from "mysql2/promise";
import BrandRepository from "../repository/brand_repository.js";

class BrandController {
    private BrandRepository: BrandRepository = new BrandRepository();


    // méthodes appelées par le routeur
    // public index = (req: Request, res: Response): Response => {
    //     return res.send("brand controller vincent");
    // };

   
    public selectAll = async (req: Request, res: Response): Promise<Response> => {
        const results: RowDataPacket | unknown = await this.BrandRepository.selectALL();

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