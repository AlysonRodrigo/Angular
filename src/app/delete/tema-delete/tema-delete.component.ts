import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { temaModel } from 'src/app/Model/temaModel';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema-delete',
  templateUrl: './tema-delete.component.html',
  styleUrls: ['./tema-delete.component.css']
})
export class TemaDeleteComponent implements OnInit {

  tema: temaModel = new temaModel()
  idTema: number

  constructor(
    private temaService: TemaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (environment.token == '') {
      alert('Sua seção espirou, faça login novamente...')
      this.router.navigate(['/enter'])
    }
      this.idTema = this.route.snapshot.params['id']
      this.findByIdTema(this.idTema)
  }

  findByIdTema(id:number) {
    this.temaService.getByIdTemas(id).subscribe((resp: temaModel)=>{
      this.tema = resp
    })
  }
  apagar(){
    this.temaService.deleteTema(this.idTema).subscribe(() =>{
      alert('Tema Apagado com sucesso')
      this.router.navigate(['/tema'])
    })
  }
}
