import type { FieldPacket, Pool, QueryResult } from "mysql2/promise";
import MysqlService from "../service/mysql_service.js";
import Vehicule from "../model/vehicule.js";
import BrandRepository from "./brand_repository.js";
import Brand from "../model/brand.js";
import Option from "../model/option.js";
import OptionRepository from "./option_repository.js";


class VehiculeRepository{
    // accéder au service MySQL
    private mySQLService = new MysqlService();

    // table principale utilisée par la classe
    private table = 'vehicule';

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
    JOIN ${process.env.MYSQL_DB}.vehicule_option
    ON vehicule_option.vehicule_id = vehicule.id
    JOIN ${process.env.MYSQL_DB}.options
    ON vehicule_option.option_id = options.id
    GROUP BY ${this.table}.id
    ;
    `;
    // exécuter la requête SQL ou récupérer une erreur
    try {
        const results: [QueryResult, FieldPacket[]] = await connection.execute(query);

        const fullResults = results.shift() as Vehicule[];
        
        

    // boucler sur les résultats
        for (let i = 0; i < fullResults.length; i++){
            // récuperer un objet brand
            const brand: Brand | unknown = await new BrandRepository().selectOne({
                id: fullResults[i].brand_id,
            });

            // assigner le resulatat
            fullResults[i].brand = brand;
      
            // requete pour récuperer les options
            const options: Option[] | unknown = await new OptionRepository().selectInlist(
                fullResults[i].options_id as string,
            );
console.log(options);

        }

    // renvoyer les résultats de la requête
    return fullResults;
    } catch (error) {
    return error;
    }
    };

     
    // fonction SelectOne
    
    // data représente req.params envoyé par le controleur
    public selectOne = async (data: object): Promise<QueryResult | unknown | Vehicule> => {
        
        const connection: Pool = await this.mySQLService.connect();

        // Création d'une variable de requete, éviter les injections SQL
    const query = `
    SELECT ${this.table}.*
    FROM ${process.env.MYSQL_DB}.${this.table}
    WHERE ${this.table}.id = :id
    ;
    `;
        
    try {
        const results: [QueryResult, FieldPacket[]] = await connection.execute(query, data);

        const fullResults = (results.shift() as Vehicule[]).shift() as Vehicule;
        
        const brand: Brand | unknown = await new BrandRepository().selectOne({
            id: fullResults.brand_id,
        });
    

        return fullResults;
    } catch (error: unknown) {
    return error;
    }
    };
    

}
    
export default VehiculeRepository;