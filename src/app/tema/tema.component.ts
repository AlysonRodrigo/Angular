import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { temaModel } from '../Model/temaModel';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema: temaModel=new temaModel()
  listaTema: temaModel[]
  

  constructor(
   private router:Router,
   private temaService: TemaService
  ) { }

  ngOnInit(){
    if (environment.token == ''){
      alert('Sua seção espirou, faça login novamente...')
      this.router.navigate(['/enter'])
    }

    this.findAllTemas()
  }
  findAllTemas(){
    this.temaService.getAllTema().subscribe((resp :temaModel[])=>{
      this.listaTema = resp
    })
  }

  cadastrar(){
    console.log(environment.token)
    this.temaService.postTema(this.tema).subscribe((resp: temaModel)=>{
      this.tema= resp
      alert('Tema Cadastrado com Sucesso!!')
      this.findAllTemas()
      this.tema = new temaModel()
    })
  }

}
