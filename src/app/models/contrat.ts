import { Client } from "./client";

export class Contrat {
    id!:number;
    reference!:string;
    nature!: string;
    montantContrat!: number;
    fileContrat!: string;
    description!: string;
    dateDebutContrat!: Date;
    dateFinContrat!: Date;
    client!: Client;
}
