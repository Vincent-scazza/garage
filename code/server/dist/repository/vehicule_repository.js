import MysqlService from "../service/mysql_service.js";
import BrandRepository from "./brand_repository.js";
class VehiculeRepository {
    // accéder au service MySQL
    mySQLService = new MysqlService();
    // table principale utilisée par la classe
    table = 'vehicule';
    // fonction selectALL
    // sélection de tous les enregistrements
    selectALL = async () => {
        /* connexion à la base de données
         await permet de créer un temps d'attentes obligatoirement
         utilisé dans une fonction asynchrone permet de récupérer
         automatiquement le contenu de la promesse
         */
        const connection = await this.mySQLService.connect();
        // requête SQL
        const query = `
    SELECT ${this.table}.*
    FROM ${process.env.MYSQL_DB}.${this.table};
    `;
        // exécuter la requête SQL ou récupérer une erreur
        try {
            const results = await connection.execute(query);
            const fullResults = results.shift();
            // boucler sur les résultats
            for (let i = 0; i < fullResults.length; i++) {
                // récuperer un objet brand
                const brand = await new BrandRepository().selectOne({
                    id: fullResults[i].brand_id,
                });
                // assigner le resulatat
                fullResults[i].brand = brand;
                // console.log(brand);
            }
            // renvoyer les résultats de la requête
            return fullResults;
        }
        catch (error) {
            return error;
        }
    };
    // fonction SelectOne
    // data représente req.params envoyé par le controleur
    selectOne = async (data) => {
        const connection = await this.mySQLService.connect();
        // Création d'une variable de requete, éviter les injections SQL
        const query = `
    SELECT ${this.table}.*
    FROM ${process.env.MYSQL_DB}.${this.table}
    WHERE ${this.table}.id = :id
    ;
    `;
        try {
            const results = await connection.execute(query, data);
            const fullResults = results.shift().shift();
            const brand = await new BrandRepository().selectOne({
                id: fullResults.brand_id,
            });
            return fullResults;
        }
        catch (error) {
            return error;
        }
    };
}
export default VehiculeRepository;
