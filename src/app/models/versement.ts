import { Employe } from "./employe";

export class Versement {
    id!:number;
    numVersement!:string;
    numeroRecu!:string;
    montantVersement!:number;
    motif!:string;
    fileVersement!:string;
    dateVersement!:Date;
    employe!: Employe;

}
