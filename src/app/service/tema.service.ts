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
    return this.http.get<temaModel[]>('https://blog-pessoal-alyson.herokuapp.com/tema/todos')
  }

  getByIdTema(id:number):Observable<temaModel>{
return this.http.get<temaModel>(`https://blog-pessoal-alyson.herokuapp.com/tema/${id}`)
  }

  getByNomeTema(nome:string): Observable<temaModel[]>{
    return this.http.get<temaModel[]>(`https://blog-pessoal-alyson.herokuapp.com/tema/nome/${nome}`)
  }

postTema(tema: temaModel): Observable<temaModel>{
  return this.http.post<temaModel>('https://blog-pessoal-alyson.herokuapp.com/tema/salvar',tema)
}

putTema(tema:temaModel):Observable<temaModel>{
  return this.http.put<temaModel>('https://blog-pessoal-alyson.herokuapp.com/tema',tema)
}

deleteTema(id: number){
  return this.http.delete(`https://blog-pessoal-alyson.herokuapp.com/tema/deletar/${id}`)
}

}