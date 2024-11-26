import type { NextFunction, Request, Response } from "express";
import type File from "../model/file.js";
import fs from "node:fs/promises";

class VehiculeFileMiddleware {
	public process = async (req: Request, res: Response, next: NextFunction) => {
		/*
         {
    fieldname: 'photo',
    originalname: 'qrcode_annonce.png',
    encoding: '7bit',
    mimetype: 'image/png',
    destination: 'public/img',
    filename: 'b33e0bea1bac89e55479831607ac2fb1',
    path: 'public/img/b33e0bea1bac89e55479831607ac2fb1',
    size: 3000
  }
*/
		// console.log(req.files);

		// si une image a été sélectionnée
		if ((req.files as []).length > 0) {
			const file: File = (req.files as File[]).shift() as File;
			const extension: string = (file.mimetype as string).split("/")[1];
			const filename = `${file.filename}.${extension}`;

			// renommer le fichier transféré
			await fs.rename(file.path, `${file.destination}/${filename}`);

			// utiliser le nom du fichier pour la propriété gérant l'image
			req.body.photo = filename;

			console.log(req.body);
		}

		// passer au middleware suivant
		next();
	};
}

export default VehiculeFileMiddleware;
