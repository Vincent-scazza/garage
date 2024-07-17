import express, { Request, Response, Router } from "express"
import BrandController from "../controller/brand_controller.js";

class BrandRouter {
    private router: Router = express.Router();

    public getRouter = (): Router => {
        /*
             lister les routes associées au préfixe du routeur
             une route est reliée à une URL et à méthode HTTP (GET, PUT, POST, DELETE)
        */
        this.router.get("/", new BrandController().index);
        
        // route avec une variable de route; procédée d'un : 
        this.router.get("/:id", new BrandController().one);

        return this.router;
    };
    
}


export default BrandRouter;