import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from '../Model/UsuarioModel';
import { AuthService } from '../service/auth.service';
import { AlertaService } from '../service/alerta.service';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
user:UsuarioModel = new UsuarioModel
confirmSenha: string
usuar:string
  constructor(
    private authService: AuthService,
    private router:Router,
    private alertas: AlertaService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }
confirmeSenha(event:any){
this.confirmSenha = event.target.value

}
tipouser(event: any){
this.usuar= event.target.value
}
cadastrar(){
this.user.tipo=this.usuar

if(this.user.senha !=this.confirmSenha){
  this.alertas.showAlertDanger("A senha esta esta incorreta")
}else{
  this.authService.cadastrar(this.user).subscribe((resp:UsuarioModel)=>{
    this.user=resp
    this.router.navigate(['/enter'])
    this.alertas.showAlertInfo('Usuario Cadastrado com Sucesso')
  })
}
}

}