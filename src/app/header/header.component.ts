import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { CategoryModel } from '../Model/CategoryModel';
import { AuthService } from '../service/auth.service';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categoryList: CategoryModel[]
  busca: string

  constructor(
    private http: HttpClient,
    private router: Router,
    public authService: AuthService,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    this.getAllCategories()
  }

  getAllCategories() {
    this.categoryService.getAllCategory().subscribe((resp: CategoryModel[]) => {
      this.categoryList = resp
    })
  }

  exit() {
    this.router.navigate(['/login'])
    environment.token = ''
    environment.address = ''
    environment.email = ''
    environment.lastName = ''
    environment.name = ''
    environment.password = ''
    environment.id = 0
    environment.photo = ''
    environment.type = ''
    environment.idProd = 0
    environment.production = true
    environment.totalPrice = 0
  }

  refresh(){
    this.router.navigate(["/search"],{queryParams:{name:this.busca}})   
  }

  logado() {
    let ok: boolean = false

    if(environment.token != '') {
      ok = true
    }

    return ok
  }

  
  deslogado(){
    let ok: boolean = true

    if (environment.token != '') {
      ok = false
    }

    return ok
  }

}
