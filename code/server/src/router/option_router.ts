import express, { type Router } from "express";
import OptionController from "../controller/option_controller.js";

class OptionRouter {
private router: Router = express.Router();

public getRouter = (): Router => {
/*
lister les routes associées au préfixe du routeur
une route est reliée à une URL et à méthode HTTP (GET, PUT, POST, DELETE) 
*/
this.router.get("/", new OptionController().index);

// route avec une variable de route; précédée d'un :
this.router.get("/:id", new OptionController().one);

return this.router;
};
}

export default OptionRouter;