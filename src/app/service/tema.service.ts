import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { temaModel } from '../Model/temaModel';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token ={
    headers:new HttpHeaders().set('Authorization',environment.token )
  }
  getAllTema(): Observable<temaModel[]>{
    return this.http.get<temaModel[]>('http://localhost:8080/tema/todos')
  }

  getByIdTema(id:number):Observable<temaModel>{
return this.http.get<temaModel>(`http://localhost:8080/tema/${id}`)
  }

  getByNomeTema(nome:string): Observable<temaModel[]>{
    return this.http.get<temaModel[]>(`http://localhost:8080/tema/nome/${nome}`)
  }

postTema(tema: temaModel): Observable<temaModel>{
  return this.http.post<temaModel>('http://localhost:8080/tema/salvar',tema)
}

putTema(tema:temaModel):Observable<temaModel>{
  return this.http.put<temaModel>('http://localhost:8080/tema',tema)
}

deleteTema(id: number){
  return this.http.delete(`http://localhost:8080/tema/deletar/${id}`)
}


}