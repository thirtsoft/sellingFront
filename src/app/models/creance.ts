import { Client } from "./client";
import { LigneCreance } from "./ligne-creance";
import { Utilisateur } from "./utilisateur";

export class Creance {
    id!:number;
    reference!:number;
    codeCreance!: string;
    libelle!: string;
    soldeCreance!:number;
    avanceCreance!:number;
    totalCreance!:number;
    nbreJours!:number;
    status!: string;
    dateCreance!: Date;
    lcreances?: Array<LigneCreance>;
    client!: Client;
    utilisateur!: Utilisateur;

}
