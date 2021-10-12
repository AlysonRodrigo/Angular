import { temaModel } from "./temaModel"
import { UsuarioModel } from "./UsuarioModel"

export class postagemModel{
    public idPostagem: number
    public titulo: String
    public descricao: String
    public date:Date
    public criador:UsuarioModel
    public temaRelacionados:temaModel
}