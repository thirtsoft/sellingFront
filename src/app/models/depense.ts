import { TypeDepense } from "./type-depense";

export class Depense {
    id!:number;
    codeCharge!:string;
    montantCharge!:number;
    designation!: string;
    dateCharge!: Date;
    typeDepense!: TypeDepense;
}
