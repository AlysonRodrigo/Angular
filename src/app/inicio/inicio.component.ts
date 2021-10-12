import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { postagemModel } from '../Model/postagemModel';
import { temaModel } from '../Model/temaModel';
import { UsuarioModel } from '../Model/UsuarioModel';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
 
  postagem:postagemModel=new postagemModel()
  listaPostagem: postagemModel[]

  tema:temaModel = new temaModel()
listaTemas:temaModel[]
idTemas:number

usuar: UsuarioModel=new UsuarioModel()
idUsuarios=environment.id

  constructor(
    private router:Router,
    private postagemService: PostagemService,
    private temaService:TemaService,
    private authService:AuthService

  ) { }

  ngOnInit(){
    if (environment.token == ''){
      alert('Sua seção espirou, faça login novamente...')
      this.router.navigate(['/enter'])
    }
    this.getAllTema()
    this.getAllPostagem()
  }

  getAllTema(){
    this.temaService.getAllTema().subscribe((resp: temaModel[])=>{
      this.listaTemas = resp
    })
  }

  findByIdTema(){
    this.temaService.getByIdTema(this.idTemas).subscribe((resp: temaModel)=>{
      this.tema = resp
    })
  }

  getAllPostagem(){
    this.postagemService.getAllPostagem().subscribe((resp: postagemModel[])=>{
      this.listaPostagem = resp
    })
  }

  findByIdUser(){
    this.authService.getByIdUser(this.idUsuarios).subscribe((resp: UsuarioModel)=>{
      this.usuar = resp
    })
  }

publicar(){
  this.tema.idTema=this.idTemas
  this.postagem.temaRelacionados=this.tema

this.usuar.idUsuario =this.idUsuarios
this.postagem.criador=this.usuar

 this.postagemService.postPostagem(this.postagem).subscribe((resp: postagemModel)=>{
  this.postagem= resp
  alert('Postagem realizada com sucesso!!')
  this.postagem = new postagemModel()
  this.getAllPostagem()
})
}

}
