import { Devis } from "./devis";
import { Product } from "./product";

export class LigneDevis {
    id!:number;
    numeroligneDevis!:number;
    quantite!:number;
    prix!:number;
    prixligneDevis!:number;
    devis!: Devis;
    product!: Product;

}
