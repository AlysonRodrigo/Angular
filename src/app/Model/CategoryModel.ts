import { ProductModel } from "./ProductModel"

export class CategoryModel{
    public idCategory: number
    public type: string
    public description:string
    public relevancy:string
    public products:ProductModel[]
}