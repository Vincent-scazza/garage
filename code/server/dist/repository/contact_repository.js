import MongoDBService from "../service/mongodb_service.js";
class ContactRepository {
    // collection principale utilisée par la classe
    collection = "contact";
    // sélectionde tous les documents
    findAll = async () => {
        // connexion au serveur MongoDB
        const connection = await new MongoDBService().connect();
        await connection.connect();
        // sélection de la collection
        const collection = connection.db().collection(this.collection);
        // requete
        const results = collection.find().toArray();
        // retourner les résultats
        return results;
    };
    create = async (data) => {
        // connexion au serveur MongoDB
        const connection = await new MongoDBService().connect();
        await connection.connect();
        // sélection de la collection
        const collection = connection.db().collection(this.collection);
        // requete
        const results = collection.insertOne(data);
        // retourner les résultats
        return results;
    };
}
export default ContactRepository;
