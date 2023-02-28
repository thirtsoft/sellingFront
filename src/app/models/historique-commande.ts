import { Commande } from "./commande";
import { Utilisateur } from "./utilisateur";

export class HistoriqueCommande {
    id!:number;
    action!:string;
    status!:string;
    commande!: Commande;
    utilisateur!: Utilisateur;
}
