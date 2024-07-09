import type Brand from "./brand.js"

type Vehicule = {
    id?: number;
    model?: string;
    price?: number;
    brand_id?: number;
    brand?: Brand | unknown;
};

export default Vehicule;
