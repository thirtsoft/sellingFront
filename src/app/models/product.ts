import { Subcategory } from "./subcategory";
import { LigneCommande } from "./ligne-commande";
import { LigneVente } from "./ligne-vente";

export interface Product {
    id?:number;
    barCode?:string;
    reference?:string;
    designation?:string;
    prixAchat?:number;
    prixVente?:number;
    prixDetail?:number;
    qtestock?:number;
    stockInitial?:number;
    subCategory?: Subcategory;

    ligneVentes?: Array<LigneVente>;
    lcomms?: Array<LigneCommande>;
}
