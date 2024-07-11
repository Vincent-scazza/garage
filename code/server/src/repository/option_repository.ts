import type { FieldPacket, Pool, QueryResult } from "mysql2/promise";
import MysqlService from "../service/mysql_service.js";
import type Option from "../model/option.js";

class OptionRepository {
	// accéder au service MySQL
	private mySQLService = new MysqlService();

	// table principale utilisée par la classe
	private table = "options";

	// fonction selectALL

	// sélection de tous les enregistrements
	public selectALL = async (): Promise<QueryResult | unknown | Option[]> => {
		/* connexion à la base de données
         await permet de créer un temps d'attentes obligatoirement
         utilisé dans une fonction asynchrone permet de récupérer 
         automatiquement le contenu de la promesse
         */
		const connection: Pool = await this.mySQLService.connect();

		// requête SQL
		const query = `
    SELECT ${this.table}.*
    FROM ${process.env.MYSQL_DB}.${this.table};
    `;
		// exécuter la requête SQL ou récupérer une erreur
		try {
			const results: [QueryResult, FieldPacket[]] =
				await connection.execute(query);
			// renvoyer les résultats de la requête
			return results.shift();
		} catch (error: unknown) {
			return error;
		}
	};

	// fonction SelectOne
	// data représente req.params envoyé par le controleur
	public selectOne = async (
		data: object,
	): Promise<QueryResult | unknown | Option[]> => {
		const connection: Pool = await this.mySQLService.connect();

		// Création d'une variable de requete, éviter les injections SQL
		const query = `
    SELECT ${this.table}.*
    FROM ${process.env.MYSQL_DB}.${this.table}
    WHERE ${this.table}.id = :id
    ;
    `;

		try {
			const results: [QueryResult, FieldPacket[]] = await connection.execute(
				query,
				data,
			);

			// shift prermet de récupérer le premier indice d'un array
			return (results.shift() as []).shift();
		} catch (error) {
			return error;
		}
	};

	public selectInlist = async (
		data: string,
	): Promise<QueryResult | unknown | Option[]> => {
		const connection: Pool = await this.mySQLService.connect();

		// Création d'une variable de requete, éviter les injections SQL
		const query = `
    SELECT ${this.table}.*
    FROM ${process.env.MYSQL_DB}.${this.table}
    WHERE ${this.table}.id IN (${data})
    ;
    `;

		try {
			const results: [QueryResult, FieldPacket[]] = await connection.execute(
				query,
				data,
			);

			// shift prermet de récupérer le premier indice d'un array
			return results.shift();
		} catch (error) {
			return error;
		}
	};
}

export default OptionRepository;
