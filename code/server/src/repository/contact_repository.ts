import type { Collection, Document } from "mongodb";
import MongoDBService from "../service/mongodb_service.js";

class ContactRepository {
	// collection principale utilisée par la classe
	private collection = "contact";

	// sélectionde tous les documents
	public findAll = async (): Promise<unknown> => {
		// connexion au serveur MongoDB
		const connection = await new MongoDBService().connect();
		await connection.connect();

		// sélection de la collection
		const collection: Collection = connection.db().collection(this.collection);

		// requete
		const results = collection.find().toArray();

		// retourner les résultats
		return results;
	};
	public create = async (data: object): Promise<unknown> => {
		// connexion au serveur MongoDB
		const connection = await new MongoDBService().connect();
		await connection.connect();

		// sélection de la collection
		const collection: Collection = connection.db().collection(this.collection);

		// requete
		const results = collection.insertOne(data);

		// retourner les résultats
		return results;
	};
}

export default ContactRepository;
