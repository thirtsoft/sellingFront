import { Avoir } from "./avoir";
import { Product } from "./product";

export class LigneAvoir {
    id!:number;
    numeroAvoir!:number;
    quantite!:number;
    prixLigneAvoir!:number;
    avoir!: Avoir; 
    product!: Product;

}
