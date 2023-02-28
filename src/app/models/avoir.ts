import { Fournisseur } from "./fournisseur";
import { LigneAvoir } from "./ligne-avoir";

export class Avoir {
    id!:number;
    reference!:number;
    libelle!:string;
    soldeAvoir!: number;
    nbreJours!: number;
    totalAvoir!: number;
    status!: string;
    dateAvoir!: Date;
    lavoirs: Array<LigneAvoir> = new Array();
    fournisseur!: Fournisseur;
}
