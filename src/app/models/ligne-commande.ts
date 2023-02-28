import { Commande } from "./commande";
import { Product } from "./product";

export interface LigneCommande {
    id?:number;
    numero?:number;
    quantite?:number;
    prix?:number;
    prixCommande?:number;
    commande?: Commande; 
    product?: Product;

}
