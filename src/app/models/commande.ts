import { Client } from "./client";
import { LigneCommande } from "./ligne-commande";
import { Utilisateur } from "./utilisateur";

export interface Commande {
    id?:number;
    numeroCommande?:number;
    totalCommande?:number;
    montantReglement?:number;
    typeReglement?: string;
    status?: string;
    dateCommande?: Date;
    lcomms?: Array<LigneCommande>;
    client?: Client;
    utilisateur?: Utilisateur;
}
