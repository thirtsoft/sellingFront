import { Category } from "./category";

export class Subcategory {
    id!:number;
    code!:string;
    libelle!:string;
    category!: Category;
}

