import type {
	FieldPacket,
	Pool,
	PoolConnection,
	QueryResult,
} from "mysql2/promise";
import MysqlService from "../service/mysql_service.js";
import type Vehicule from "../model/vehicule.js";
import BrandRepository from "./brand_repository.js";
import type Brand from "../model/brand.js";
import type Option from "../model/option.js";
import OptionRepository from "./option_repository.js";

class VehiculeRepository {
	// accéder au service MySQL
	private mySQLService = new MysqlService();

	// table principale utilisée par la classe
	private table = "vehicule";

	// fonction selectALL

	// sélection de tous les enregistrements
	public selectALL = async (): Promise<QueryResult | unknown | Vehicule> => {
		/* connexion à la base de données
         await permet de créer un temps d'attentes obligatoirement
         utilisé dans une fonction asynchrone permet de récupérer 
         automatiquement le contenu de la promesse
         */
		const connection: Pool = await this.mySQLService.connect();

		// requête SQL
		const query = `
		SELECT
			${this.table}.*,
			GROUP_CONCAT(options.id) AS options_id
		FROM ${process.env.MYSQL_DB}.${this.table}
		LEFT JOIN ${process.env.MYSQL_DB}.vehicule_option
		ON vehicule_option.vehicule_id = vehicule.id
		LEFT JOIN ${process.env.MYSQL_DB}.options
		ON vehicule_option.option_id = options.id
		GROUP BY ${this.table}.id
    ;
    `;
		// exécuter la requête SQL ou récupérer une erreur
		try {
			const results: [QueryResult, FieldPacket[]] =
				await connection.execute(query);

			const fullResults = results.shift() as Vehicule[];

			// boucler sur les résultats
			for (let i = 0; i < fullResults.length; i++) {
				// récuperer un objet brand
				const brand: Brand | unknown = await new BrandRepository().selectOne({
					id: fullResults[i].brand_id,
				});

				// assigner le resulatat
				fullResults[i].brand = brand;

				// requete pour récuperer les options
				const options: Option[] | unknown =
					await new OptionRepository().selectInList(
						fullResults[i].options_id as string,
					);

				fullResults[i].options = options;
				// console.log(options);
			}

			// renvoyer les résultats de la requête
			return fullResults;
		} catch (error) {
			return error;
		}
	};

	// fonction SelectOne

	// data représente req.params envoyé par le controleur
	public selectOne = async (
		data: object,
	): Promise<QueryResult | unknown | Vehicule> => {
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

			const fullResults = (results.shift() as Vehicule[]).shift() as Vehicule;

			const brand: Brand | unknown = await new BrandRepository().selectOne({
				id: fullResults.brand_id,
			});

			return fullResults;
		} catch (error: unknown) {
			return error;
		}
	};

	public create = async (data: Vehicule) => {
		// connexion
		const connection: Pool = await this.mySQLService.connect();

		// canal isolé pour la transaction
		const transaction = await connection.getConnection();

		try {
			// demarrer une transaction
			await transaction.beginTransaction();

			// première requete
			let query = `
            INSERT INTO ${process.env.MYSQL_DB}.${this.table}
            VALUE
                (NULL, :model, :price, :photo, :brand_id)
            ;
        `;

			await connection.execute(query, data);

			// récupérer le dernier identifiant inséré
			query = "SET @vehicule_id = LAST_INSERT_ID();";
			await connection.execute(query);

			// insérer les options
			const values = data.options_id
				?.split(",")
				.map((value) => `(@vehicule_id, ${value})`)
				.join(",");

			query = `
                    INSERT INTO ${process.env.MYSQL_DB}.vehicule_option
                    VALUES ${values};
                `;

			const results = await connection.execute(query);

			// valider la transaction
			await transaction.commit();

			return results;
		} catch (error) {
			// annuler la transaction
			await transaction.rollback();

			return error;
		}
	};

	public update = async (data: Vehicule) => {
		// connexion
		const connection: Pool = await this.mySQLService.connect();

		// canal isolé pour la transaction
		const transaction = await connection.getConnection();

		/* data > {
            model: 'Corolla 2',
            price: 20000,
            brand_id: 1,
            options_id: '2',
            id: '10'
          } */

		try {
			// démarrer une transaction
			await transaction.beginTransaction();

			// première requête
			let query = ` 
                UPDATE ${process.env.MYSQL_DB}.${this.table}
                SET
                    ${this.table}.model = :model,
                    ${this.table}.price = :price,
                    ${this.table}.photo = :photo,
                    ${this.table}.brand_id = :brand_id
                WHERE
                    ${this.table}.id = :id
                ;
            `;

			await connection.execute(query, data);

			// supprimer les options existantes du véhicule à supprimer
			query = `
                DELETE FROM ${process.env.MYSQL_DB}.vehicule_option
                WHERE vehicule_option.vehicule_id = :id
                ;
            `;

			await connection.execute(query, data);

			// insérer les options
			const values = data.options_id
				?.split(",")
				.map((value) => ` (:id, ${value})`)
				.join(",");

			query = `
                INSERT INTO ${process.env.MYSQL_DB}.vehicule_option
                VALUES ${values};
            `;

			const results = await connection.execute(query, data);

			// valider la transaction
			await transaction.commit();

			return results;
		} catch (error) {
			// annuler la transaction
			await transaction.rollback();

			return error;
		}
	};

	public delete = async (data: Vehicule) => {
		// connexion
		const connection: Pool = await this.mySQLService.connect();

		// canal isolé pour la transaction
		const transaction = await connection.getConnection();

		try {
			// demarrer une transaction
			await transaction.beginTransaction();

			// première requete
			// suppromer les options existantes du véhicule a supprimer
			let query = `
            DELETE FROM ${process.env.MYSQL_DB}.vehicule_option
            WHERE
			       vehicule_option.vehicule_id = :id
            ;
        `;

			await connection.execute(query, data);

			// supprimer le véhicule
			query = `
            DELETE FROM ${process.env.MYSQL_DB}.${this.table}
            WHERE ${this.table}.id = :id
            ;
        `;

			const results = await connection.execute(query, data);

			// valider la transaction
			await transaction.commit();

			return results;
		} catch (error) {
			// annuler la transaction
			await transaction.rollback();

			return error;
		}
	};
}

export default VehiculeRepository;
