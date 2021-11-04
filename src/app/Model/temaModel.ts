import { postagemModel } from "./postagemModel"

export class temaModel{
    public idTema: number
    public tema: string
    public postagens:postagemModel[]
}