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
    return this.http.get<postagemModel[]>('https://blog-pessoal-alyson.herokuapp.com/postagem')
  }
  getByIdPostagem(id: number):Observable<postagemModel>{
    return this.http.get<postagemModel>(`https://blog-pessoal-alyson.herokuapp.com/postagem/${id}`)
  }

  getByTituloPostagem(titulo: string):Observable<postagemModel[]>{
    return this.http.get<postagemModel[]>(`https://blog-pessoal-alyson.herokuapp.com/postagem/titulo/${titulo}`)
  }

  postPostagem(postagem:postagemModel):Observable<postagemModel>{
    return this.http.post<postagemModel>('https://blog-pessoal-alyson.herokuapp.com/postagem',postagem)
  }
  putPostagem(postagem:postagemModel):Observable<postagemModel>{
  return this.http.put<postagemModel>('https://blog-pessoal-alyson.herokuapp.com/postagem',postagem)
  }
  deletePostagem(id: number){
    return this.http.delete(`https://blog-pessoal-alyson.herokuapp.com/postagem/${id}`)
  }
}
