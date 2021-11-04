import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { temaModel } from 'src/app/Model/temaModel';
import { AlertaService } from 'src/app/service/alerta.service';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema-edit',
  templateUrl: './tema-edit.component.html',
  styleUrls: ['./tema-edit.component.css']
})
export class TemaEditComponent implements OnInit {

  tema: temaModel = new temaModel()
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
  
  let id = this.route.snapshot.params['id']
  this. findByIdTema(id)
  }
  findByIdTema(id:number) {
this.temaService.getByIdTema(id).subscribe((resp: temaModel) =>{
  this.tema = resp
})
  }
  atualizar(){
    this.temaService.putTema(this.tema).subscribe((resp: temaModel) => {
      this.tema = resp
      this.alertas.showAlertSucess('Tema Atualizado com Sucesso')
      this.router.navigate(['/tema'])
    })
  }
}
