import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { postagemModel } from '../Model/postagemModel';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token ={
    headers:new HttpHeaders().set('Authorization',environment.token )
  }
  getAllPostagem():Observable<postagemModel[]>{
    return this.http.get<postagemModel[]>('http://localhost:8080/postagem')
  }
  getByIdPostagem(id: number):Observable<postagemModel>{
    return this.http.get<postagemModel>(`http://localhost:8080/postagem/${id}`)
  }
  postPostagem(postagem:postagemModel):Observable<postagemModel>{
    return this.http.post<postagemModel>('http://localhost:8080/postagem',postagem)
  }
  putPostagem(postagem:postagemModel):Observable<postagemModel>{
  return this.http.put<postagemModel>('http://localhost:8080/postagem',postagem)
  }
  deletePostagem(id: number){
    return this.http.delete(`http://localhost:8080/postagem/${id}`)
  }
}
