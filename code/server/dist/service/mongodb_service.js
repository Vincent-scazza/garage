import { MongoClient } from "mongodb";
class MongoDBService {
    // connexion au seveur MongDB
    connect = async () => {
        // URL de connexion
        const url = `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}:27017/${process.env.MONGODB_DB}?authSource=admin`;
        // connexion au serveur MongoDB
        const client = new MongoClient(url);
        // sélection de la base de données
        client.db(process.env.MONGODB_DB);
        // retourner la connexion
        return client;
    };
}
export default MongoDBService;
