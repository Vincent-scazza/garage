import express from "express";
import HomepageController from "../controller/not_found_router.js";
class NotFoundRouter {
    router = express.Router();
    getRouter = () => {
        /*
             lister les routes associées au préfixe du routeur
             une route est reliée à une URL et à méthode HTTP (GET, PUT, POST, DELETE)
        */
        this.router.get('/', new HomepageController().index);
        return this.router;
    };
}
export default NotFoundRouter;
