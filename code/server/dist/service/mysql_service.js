import mysql from "mysql2/promise";
class MysqlService {
    //coonexion unique
    static connection;
    connect = async () => {
        // si   aucune connexion n'existe
        if (!MysqlService.connection) {
            MysqlService.connection = mysql.createPool({
                host: process.env.MYSQL_HOST,
                database: process.env.MYSQL_DB,
                user: process.env.MYSQL_USER,
                password: process.env.MYSQL_PASSWORD,
                // permet de créer des requtes préparées
                namedPlaceholders: true,
            });
        }
        return MysqlService.connection;
    };
}
export default MysqlService;
