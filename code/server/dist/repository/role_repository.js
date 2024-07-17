import MysqlService from "../service/mysql_service.js";
class RolesRepository {
    // accéder au service MySQL
    mySQLService = new MysqlService();
    // table principale utilisée par la classe
    table = 'roles';
    // fonction selectALL
    // sélection de tous les enregistrements
    // public selectALL = async (): Promise<QueryResult | unknown | User[]> => {
    //     const connection: Pool = await this.mySQLService.connect();
    // // requête SQL
    // const query = `
    // SELECT ${this.table}.*
    // FROM ${process.env.MYSQL_DB}.${this.table};
    // `;
    // // exécuter la requête SQL ou récupérer une erreur
    // try {
    // const results: [QueryResult, FieldPacket[]] = await connection.execute(query);
    // // renvoyer les résultats de la requête
    // return results.shift();
    // } catch (error: unknown) {
    // return error;
    // }
    // };
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
export default RolesRepository;
