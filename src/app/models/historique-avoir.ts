import { Avoir } from "./avoir";
import { Utilisateur } from "./utilisateur";

export class HistoriqueAvoir {
    id!:number;
    action!:string;
    status!:string;
    avoir!: Avoir;
    utilisateur!: Utilisateur;
}
