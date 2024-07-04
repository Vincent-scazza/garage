import express from "express";
import http from "node:http";
import HomepageRouter from "../router/homepage_router.js";
import NotFoundRouter from "../router/not_found_router.js";
class Server {
    // propriétés
    app = express();
    router = express.Router();
    // constructeur
    constructor() {
        // lier le router a l'application
        this.app.use(this.router);
        this.listRouter();
    }
    // méthodes
    listRouter = () => {
        /*
           appel d'un routeur :
           -préfixe de toutes les routes conteneur dans le routeur
           -routeur
        */
        this.router.use("/", new HomepageRouter().getRouter());
        // le routeur NotFound doit etre obligatoirement appeleé en dernière position
        this.router.use('*', new NotFoundRouter().getRouter());
    };
    createServer = () => {
        return http.createServer(this.app);
    };
}
export default Server;
