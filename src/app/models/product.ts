import { Subcategory } from "./subcategory";

export class Product {
    id!:number;
    barCode!:string;
    reference!:string;
    designation!:string;
    prixAchat!:number;
    prixVente!:number;
    prixDetail!:number;
    qtestock!:number;
    stockInitial!:number;
    subCategory!: Subcategory;
}
