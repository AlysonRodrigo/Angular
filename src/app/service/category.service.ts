import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { CategoryModel } from '../Model/CategoryModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllCategory(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>('https://action-forlife.herokuapp.com/category/all', this.token)
  }

  getByIdCategory(id: number): Observable<CategoryModel> {
    return this.http.get<CategoryModel>(`https://action-forlife.herokuapp.com/category/id/${id}`, this.token)
  }

  postCategory(category: CategoryModel): Observable<CategoryModel> {
    return this.http.post<CategoryModel>('https://action-forlife.herokuapp.com/category/save', category, this.token)
  }

  putCategory(category: CategoryModel): Observable<CategoryModel> {
    return this.http.put<CategoryModel>('https://action-forlife.herokuapp.com/category/update', category, this.token)
  }

  deleteCategory(id: number){
      return this.http.delete(`https://action-forlife.herokuapp.com/category/delete/${id}`,  this.token)   
  }

  

}
