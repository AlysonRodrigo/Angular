import {postagemModel} from './postagemModel';
export class UsuarioModel{
    public idUsuario: number
    public nome: string
    public email: string
    public senha: string
    public foto: string
    public tipo: string
   public minhasPostagens: postagemModel[]
}