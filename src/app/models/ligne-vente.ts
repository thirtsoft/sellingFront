import { Product } from "./product";
import { Vente } from "./vente";

export interface LigneVente {
    id?:number;
    numeroVente?:number;
    code?:string;
    quantite?:number;
    prixVente?:number;
    vente?: Vente;
    product?: Product;

}
