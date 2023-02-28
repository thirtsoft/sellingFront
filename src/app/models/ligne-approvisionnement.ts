import { Approvisionnement } from "./approvisionnement";
import { Product } from "./product";

export interface LigneApprovisionnement {
    id?:number;
    numeroligneApprovisionnement?:number;
    quantite?:number;
    prix?:number;
    prixLigneAppro?:number;
    approvisionnement?: Approvisionnement; 
    product?: Product;
}
