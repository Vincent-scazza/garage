import express from "express";
import BrandController from "../controller/brand_controller.js";
class BrandRouter {
    router = express.Router();
    getRouter = () => {
        /*
             lister les routes associées au préfixe du routeur
             une route est reliée à une URL et à méthode HTTP (GET, PUT, POST, DELETE)
        */
        this.router.get('/', new BrandController().selectAll);
        return this.router;
    };
}
export default BrandRouter;
