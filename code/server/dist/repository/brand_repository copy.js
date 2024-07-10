import MysqlService from "../service/mysql_service.js";
class BrandRepository {
    // accéder au service MySQL
    mySQLService = new MysqlService();
    // table principale utilisée par la classe
    table = 'brand';
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
            // renvoyer les résultats de la requête
            return results.shift();
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
            // shift prermet de récupérer le premier indice d'un array
            return results.shift().shift();
        }
        catch (error) {
            return error;
        }
    };
}
export default BrandRepository;
