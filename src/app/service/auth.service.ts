import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { login } from '../Model/login';
import { UsuarioModel } from '../Model/UsuarioModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
entrar(userLogin: login): Observable<login>{
return this.http.post<login>('http://localhost:8080/usuario/logar',userLogin)
}
cadastrar(user:UsuarioModel): Observable<UsuarioModel> {
  return this.http.post<UsuarioModel>('http://localhost:8080/usuario/salvar',user)
}

}