import { LigneVente } from "./ligne-vente";
import { Utilisateur } from "./utilisateur";

export interface Vente {
    id?:number;
    numeroVente?:number;
    totalVente?:number;
    montantReglement?:number;
    typeReglement?:string;
    status?:string;
    dateVente?:Date;
    ligneVentes?: Array<LigneVente>;
    utilisateur?: Utilisateur

}



