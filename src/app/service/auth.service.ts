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
  entrar(userLogin: login): Observable<login> {
    return this.http.put<login>('http://localhost:8080/usuario/credenciais', userLogin)
  }
  cadastrar(user: UsuarioModel): Observable<UsuarioModel> {
    return this.http.post<UsuarioModel>('http://localhost:8080/usuario/salvar', user)
  }
  getByIdUser(id_usuario: number): Observable<UsuarioModel> {
    return this.http.get<UsuarioModel>(`http://localhost:8080/usuario/${id_usuario}`)
  }
  atualizarUser(user: UsuarioModel): Observable<UsuarioModel>{
    return this.http.put<UsuarioModel>('http://localhost:8080/usuario/atualizar', user)
  }
  logado() {
    let ok: boolean = false

    if (environment.token != '') {
      ok = true
    }

    return ok
  }

}