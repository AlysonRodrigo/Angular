import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { temaModel } from 'src/app/Model/temaModel';
import { AlertaService } from 'src/app/service/alerta.service';
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
    private route: ActivatedRoute,
    private alertas: AlertaService

  ) { }

  ngOnInit() {
    if (environment.token == '') {
      this.alertas.showAlertDanger('Sua seção espirou, faça login novamente...')
      this.router.navigate(['/enter'])
    }
      this.idTema = this.route.snapshot.params['id']
      this.findByIdTema(this.idTema)
  }

  findByIdTema(id:number) {
    this.temaService.getByIdTema(id).subscribe((resp: temaModel)=>{
      this.tema = resp
    })
  }
  apagar(){
    this.temaService.deleteTema(this.idTema).subscribe(() =>{
      this.alertas.showAlertSucess('Tema Apagado com sucesso')
      this.router.navigate(['/tema'])
    })
  }
}
