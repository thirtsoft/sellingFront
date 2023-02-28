import { Utilisateur } from "./utilisateur";
import { Vente } from "./vente";

export class HistoriqueVente {
    id!:number;
    action!:string;
    status!:string;
    vente!: Vente; 
    utilisateur!: Utilisateur;
}
