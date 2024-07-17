import type { Request, Response } from "express";

class HomepageController {
	// méthodes appelées par le routeur
	public index = (req: Request, res: Response): Response => {
		return res.send("homepage controller");
	};
}

export default HomepageController;
