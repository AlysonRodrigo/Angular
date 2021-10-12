import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { postagemModel } from 'src/app/Model/postagemModel';
import { temaModel } from 'src/app/Model/temaModel';
import { PostagemService } from 'src/app/service/postagem.service';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-postagem-delete',
  templateUrl: './postagem-delete.component.html',
  styleUrls: ['./postagem-delete.component.css']
})
export class PostagemDeleteComponent implements OnInit {

  postagem: postagemModel=new postagemModel()
  idPost:number

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private postagemService:PostagemService
  ) { }

 ngOnInit(){
    window.scroll(0,0)
    
    if (environment.token == ''){
      alert('Sua seção espirou, faça login novamente...')
      this.router.navigate(['/enter'])
    }
    this.idPost = this.route.snapshot.params['id']
    this.findByIdPostagem(this.idPost)
  }
  findByIdPostagem(id: number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: postagemModel)=>{
      this.postagem=resp
    })
    }

    apagar(){
          this.postagemService.deletePostagem(this.idPost).subscribe(()=>{
          alert('Postagem apagada com Sucesso!!')
          this.router.navigate(['/inicio'])
        })
    }
}
