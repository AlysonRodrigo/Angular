import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
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
return this.http.post<login>('https://blog-pessoal-alyson.herokuapp.com/usuario/logar',userLogin)
}
cadastrar(user:UsuarioModel): Observable<UsuarioModel> {
  return this.http.post<UsuarioModel>('https://blog-pessoal-alyson.herokuapp.com/usuario/salvar',user)
}
logado(){
  let ok:boolean = false

 if( environment.token !=''){
   ok = true
 }

  return ok
  }

}