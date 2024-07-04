import { Request, Response } from "express";

class NotFoundController {
    // méthodes appelées par le routeur
    public index = (req: Request, res: Response): Response => {
        return res.send("Not Found - GET");
    };
}

export default NotFoundController;