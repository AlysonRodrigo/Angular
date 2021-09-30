import { temaModel } from "./temaModel"
import { UsuarioModel } from "./UsuarioModel"
export class postagemModel{
    public idPostagem: number
    public titulo: String
    public descricao: String
    public dataPostagem:Date
    public criador:UsuarioModel
    public TemasRelacionados:temaModel
}