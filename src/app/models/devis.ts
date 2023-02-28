import { Client } from "./client";
import { LigneDevis } from "./ligne-devis";
import { Utilisateur } from "./utilisateur";

export class Devis {
    id!:number;
    numeroDevis!:number;
    totalDevis!:number;
    status!: string;
    observation!: string;
    dateDevis!: Date;
    ldevis: Array<LigneDevis> = new Array();
    client!: Client;
    utilisateur!: Utilisateur;
}
