import type Brand from "./brand.js";
import type Option from "./option.js";

type Vehicule = {
	id?: number;
	model?: string;
	price?: number;
	photo?: string;
	brand_id?: number;
	brand?: Brand | unknown;
	//  liste des identifiants(clé primaire) des options
	options_id?: string;
	options?: Option[] | unknown;
};

export default Vehicule;
