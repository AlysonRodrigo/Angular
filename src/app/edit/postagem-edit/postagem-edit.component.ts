import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { postagemModel } from 'src/app/Model/postagemModel';
import { temaModel } from 'src/app/Model/temaModel';
import { AlertaService } from 'src/app/service/alerta.service';
import { PostagemService } from 'src/app/service/postagem.service';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-postagem-edit',
  templateUrl: './postagem-edit.component.html',
  styleUrls: ['./postagem-edit.component.css']
})
export class PostagemEditComponent implements OnInit {

  postagem: postagemModel=new postagemModel()

  tema:temaModel=new temaModel()
  listaTemas: temaModel[]
  idTemas:number
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private postagemService:PostagemService,
    private temaService:TemaService,
    private alertas: AlertaService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    
    if (environment.token == ''){
      this.alertas.showAlertDanger('Sua seção espirou, faça login novamente...')
      this.router.navigate(['/enter'])
    }
    let id = this.route.snapshot.params['id']
    this.findByIdPostagem(id)
    this.findAllTema()
  }
  findByIdPostagem(id: number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: postagemModel)=>{
      this.postagem=resp
    })
    }
    findByIdTema(){
      this.temaService.getByIdTema(this.idTemas).subscribe((resp:temaModel)=>{
      this.tema=resp
    })
    }
    findAllTema(){
      this.temaService.getAllTema().subscribe((resp:temaModel[])=>{
        this.listaTemas = resp
      })
    }

    atualizar(){
        this.tema.idTema=this.idTemas
        this.postagem.temaRelacionados=this.tema

        this.postagemService.putPostagem(this.postagem).subscribe((resp:postagemModel)=>{
          this.postagem = resp
          this.alertas.showAlertInfo('Postagem atualizada com Sucesso')
          this.router.navigate(['/inicio'])
        })
    }
}
