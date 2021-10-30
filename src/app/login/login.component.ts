import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../Model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  login(){
    this.auth.login(this.userLogin).subscribe((resp: UserLogin) =>{
      this.userLogin = resp

      environment.token = this.userLogin.token
      environment.name = this.userLogin.name
      environment.lastName = this.userLogin.lastName
      environment.email = this.userLogin.email
      environment.id = this.userLogin.id
      environment.photo = this.userLogin.photo
      environment.address = this.userLogin.address
      environment.type = this.userLogin.type
      localStorage.clear();

      this.router.navigate(['/home'])
    }, erro =>{
      if(erro.status == 401){
        alert('Usuário ou senha incorretos.')
      }
    })
  }

}
