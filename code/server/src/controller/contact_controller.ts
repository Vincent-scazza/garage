import type { Request, Response } from "express";
import ContactRepository from "../repository/contact_repository.js";

class ContactController {
	// récupération de tous les documents
	public index = async (req: Request, res: Response): Promise<Response> => {
		const results = await new ContactRepository().findAll();

		return res.status(200).json({
			status: 200,
			message: "OK",
			data: results,
		});
	};

	public create = async (req: Request, res: Response): Promise<Response> => {
		const results = await new ContactRepository().create(req.body);

		return res.status(201).json({
			status: 201,
			message: "Create",
			data: results,
		});
	};
}

export default ContactController;
