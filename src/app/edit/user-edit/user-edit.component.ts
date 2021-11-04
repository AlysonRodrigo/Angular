import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioModel } from 'src/app/Model/UsuarioModel';
import { AlertaService } from 'src/app/service/alerta.service';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: UsuarioModel = new UsuarioModel
  idUser: number
  confirmaSenha: string
  tipoUser: string

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private alertas: AlertaService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    if (environment.token == '') {
      this.alertas.showAlertDanger('Sua seção espirou, faça login novamente...')
      this.router.navigate(['/enter'])
    }
    this.idUser = this.route.snapshot.params['id']
    this.findByIdUser(this.idUser)
  }

  confirmeSenha(event: any) {
    this.confirmaSenha = event.target.value

  }
  tipouser(event: any) {
    this.tipoUser = event.target.value
  }

  atualizar() {
    this.user.tipo = this.tipoUser

    if (this.user.senha != this.confirmaSenha) {
      this.alertas.showAlertDanger("A senha esta incorreta")
    } else {
      this.authService.atualizarUser(this.user).subscribe((resp: UsuarioModel) => {
        this.user = resp
        this.router.navigate(['/inicio'])
        this.alertas.showAlertInfo('Usuariro Atualizado com Sucesso, faça o login Novamente')
        environment.token = ''
        environment.nome = ''
        environment.foto = ''
        environment.id = 0
        this.router.navigate(['/enter'])
      })
    }
  }
  findByIdUser(id: number) {
    this.authService.getByIdUser(id).subscribe((resp: UsuarioModel) => {
      this.user = resp
    })
  }
}
