import { HttpResponse } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../Model/UserModel';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  userModel: UserModel = new UserModel()
  usersList: UserModel[]
  confirmPassword1: string
  code: string
  user: UserModel = new UserModel()
  email: UserModel = new UserModel

  terms: boolean


  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    this.findAllUsers
  }

  confirmPassword(event: any) {
    this.confirmPassword1 = event.target.value
  }

  typeUser(event: any) {
    this.userModel.type = event.target.value
  }

  userAdm() {
    if (this.userModel.type == "Administrador") {
      return true;
    } else {
      return false;
    }
  }

  register() {

    if (this.userModel.password != this.confirmPassword1) {
      alert("As senhas estão incorretas.")
    } else {
      if (this.userModel.type == "Administrador" && this.code == "xxx") {
        this.authService.register(this.userModel).subscribe((resp: UserModel) => {
          this.userModel = resp
          this.router.navigate(['/login'])
          alert("Usuário cadastrado com sucesso!")
        }, error => {
          if (error.status == 400) {
            alert("Este Email ja existe! Por favor utilize um email diferente.")
          }
        })
      } else if (this.userModel.type == "Usuario") {
        this.authService.register(this.userModel).subscribe((resp: UserModel) => {
          this.userModel = resp
          this.router.navigate(["/login"])
          alert("Usuário cadastrado com sucesso!")
        }, error => {
          if (error.status == 400) {
            alert("Este Email ja existe! Por favor utilize um email diferente.")
          }
        })
      } else {
        alert("Dados incorretos, por favor corrigir.")
        this.router.navigate(['/registration'])
      }
    }
  }

  findAllUsers() {
    this.authService.getAllUsers().subscribe((resp: UserModel[]) => {
      this.usersList = resp
    })
  }

  verifyCheckboxFalse() {
    return !this.terms
  }

  verifyCheckbox() {
    return this.terms
  }
}
