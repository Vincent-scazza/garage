import express, { Request, Response, Router } from "express"
import brandController from "../controller/brand_controller.js";
import BrandController from "../controller/brand_controller.js";

class BrandRouter {
    private router: Router = express.Router();

    public getRouter = (): Router => {
        /*
             lister les routes associées au préfixe du routeur
             une route est reliée à une URL et à méthode HTTP (GET, PUT, POST, DELETE)
        */
        this.router.get('/', new  BrandController().selectAll);

        return this.router;
    };
        
}


export default BrandRouter;