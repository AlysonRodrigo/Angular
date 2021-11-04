import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { login } from '../Model/login';
import { AuthService } from '../service/auth.service';
import { AlertaService } from '../service/alerta.service';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.css']
})
export class EnterComponent implements OnInit {

  userLogin:login = new login()

  constructor(
    private auth:AuthService,
    private router:Router,
    private alertas: AlertaService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar(){
this.auth.entrar(this.userLogin).subscribe((resp:login)=>{
this.userLogin=resp  

environment.token = this.userLogin.token
environment.nome = this.userLogin.nome
environment.id = this.userLogin.id
environment.foto = this.userLogin.foto

console.log(environment.token)
console.log(environment.nome)
console.log(environment.id)
console.log(environment.foto)


this.router.navigate(['/inicio'])
},erro=>{
  if(erro.status == 500){
    this.alertas.showAlertDanger('Email ou senha Incorreta!')
  }
})
  }
}
