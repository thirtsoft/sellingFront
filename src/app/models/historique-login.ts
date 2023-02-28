import { Utilisateur } from "./utilisateur";

export class HistoriqueLogin {
    id!:number;
    action!:string;
    status!:string;
    utilisateur!: Utilisateur;
}
