import { Fournisseur } from "./fournisseur";
import { LigneApprovisionnement } from "./ligne-approvisionnement";

export interface Approvisionnement {
    id?:number;
    code?:number;
    montantAvance?:number;
    totalAppro?:number;
    status?: string;
    observation?: string;
    dateApprovisionnement?: Date;
    ligneApprovisionnements?: Array<LigneApprovisionnement>;
    fournisseur?: Fournisseur;
   
}
