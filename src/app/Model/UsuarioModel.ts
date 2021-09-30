import {postagemModel} from './postagemModel';
export class UsuarioModel{
    public idUsuario: number
    public nome: String
    public email: String
    public senha: String
    public foto: String
    public tipo: String
   public minhasPostagens: postagemModel[]
}