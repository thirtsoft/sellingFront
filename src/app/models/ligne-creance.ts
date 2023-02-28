import { Creance } from "./creance";
import { Product } from "./product";

export interface LigneCreance {
    id?:number;
    numeroLigneCreance?:number;
    quantite?:number;
    prix?:number;
    prixLigneCreance?:number;
    creance?: Creance; 
    product?: Product;
}
