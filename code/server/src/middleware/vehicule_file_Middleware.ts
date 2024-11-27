import type { NextFunction, Request, Response } from "express";
import type File from "../model/file.js";
import fs from "node:fs/promises";
import type Vehicule from "../model/vehicule.js";
import VehiculeRepository from "../repository/vehicule_repository.js";

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

		// récupérer le véhicule mis a jour ou supprimé
		const vehicule: Vehicule | unknown =
			await new VehiculeRepository().selectOne(req.params);

		// si une image a été sélectionnée
		if ((req.files as []).length > 0) {
			const file: File = (req.files as File[]).shift() as File;
			const extension: string = (file.mimetype as string).split("/")[1];
			const filename = `${file.filename}.${extension}`;

			// renommer le fichier transféré
			await fs.rename(file.path, `${file.destination}/${filename}`);

			// utiliser le nom du fichier pour la propriété gérant l'image
			req.body.photo = filename;

			// si un véhicule est mis a jour, supprimer l'ancien fichier
			if (req.method === "PUT") {
				await fs.rm(
					`${process.env.ASSETS_DIRECTORY}/img/${(vehicule as Vehicule).photo}`,
				);
			}

			// console.log(req.body);
		} else {
			// récupérer le nom de l'image déja existante en bdd
			if (req.method === "PUT") {
				req.body.img = (vehicule as Vehicule).photo;
			}
		}

		// passer au middleware suivant
		next();
	};
}

export default VehiculeFileMiddleware;
