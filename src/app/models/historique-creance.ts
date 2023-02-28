import { Creance } from "./creance";
import { Utilisateur } from "./utilisateur";

export class HistoriqueCreance {
    id!:number;
    action!:string;
    status!:string;
    creance!: Creance;
    utilisateur!: Utilisateur;
}
