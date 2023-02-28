import { Approvisionnement } from "./approvisionnement";
import { Utilisateur } from "./utilisateur";

export class HistoriqueApprovisionnement {
    id!:number;
    action!:string;
    status!:string;
    approvisionnement!: Approvisionnement;
    utilisateur!: Utilisateur;
}
