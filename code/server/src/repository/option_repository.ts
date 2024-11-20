import type { Pool, QueryResult } from "mysql2/promise";
import MySQLService from "../service/mysql_service.js";
import type Option from "../model/option.js";

class OptionRepository {
	// accéder au service MySQL
	private mySQLService = new MySQLService();

	// table principale utilisée par la classe
	private table = "options";

	// sélection de tous les enregistrements
	public selectAll = async (): Promise<unknown | Option[]> => {
		/*
connexion à la base de données
await permet de créer un temps d'attente
obligatoirement utilisé dans une fonction asynchrone
permet de récupérer automatiquement le contenu de la promesse
*/
		const connection: Pool = await this.mySQLService.connect();

		// requête SQL
		const query = `
SELECT ${this.table}.*
FROM ${process.env.MYSQL_DB}.${this.table}
;
`;

		// exécuter la requête SQL
		try {
			const results: unknown | Option[] = await connection.execute(query);

			// shift permet de récupérer le premier indice d'un array
			return (results as Option[]).shift();
		} catch (error) {
			return error;
		}
	};

	// data représente req.params envoyé par le contrôleur
	public selectOne = async (data: object): Promise<unknown | Option> => {
		const connection: Pool = await this.mySQLService.connect();

		// création d'une variable de requête pour une requête préparée, éviter les injections SQL
		const query = `
SELECT ${this.table}.*
FROM ${process.env.MYSQL_DB}.${this.table}
WHERE ${this.table}.id = :id
;
`;

		try {
			// fournir la valeur des variables de requête, sous la forme d'un objet
			const results: unknown | Option = await connection.execute(query, data);

			// shift permet de récupérer le premier indice d'un array
			return ((results as Option[]).shift() as []).shift();
		} catch (error) {
			return error;
		}
	};

	// data représente req.params envoyé par le contrôleur
	public selectInList = async (
		data: string,
	): Promise<QueryResult | unknown | Option[]> => {
		const connection: Pool = await this.mySQLService.connect();

		// création d'une variable de requête pour une requête préparée, éviter les injections SQL
		const query = `
SELECT ${this.table}.*
FROM ${process.env.MYSQL_DB}.${this.table}
WHERE ${this.table}.id IN (${data})
;
`;

		try {
			// fournir la valeur des variables de requête, sous la forme d'un objet
			const results = await connection.execute(query, data);

			// shift permet de récupérer le premier indice d'un array
			return results.shift() as [];
		} catch (error) {
			return error;
		}
	};
}

export default OptionRepository;
