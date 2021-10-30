import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { CategoryModel } from '../Model/CategoryModel';
import { ProductModel } from '../Model/ProductModel';
import { UserModel } from '../Model/UserModel';
import { AuthService } from '../service/auth.service';
import { CategoryService } from '../service/category.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  product: ProductModel = new ProductModel()

  category: CategoryModel = new CategoryModel()
  categoryList: CategoryModel[]
  idCateg: number

  user: UserModel = new UserModel()
  idUser = environment.id

  constructor(
    private router: Router,
    private productService: ProductService,
    public authService: AuthService,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    this.getAllCategories()

  }

  getAllCategories() {
    this.categoryService.getAllCategory().subscribe((resp: CategoryModel[]) => {
      this.categoryList = resp
    })
  }


  findByIdCategory() {
    this.categoryService.getByIdCategory(this.idCateg).subscribe((resp: CategoryModel) => {
      this.category = resp
    })
  }


  insertCategory() {
    this.categoryService.postCategory(this.category).subscribe((resp: CategoryModel) => {
      this.category = resp
      alert('Categoria cadastrada com sucesso!')
      this.category = new CategoryModel()
    })
  }

  insertProduct() {
    this.category.idCategory = this.idCateg
    this.product.categoryProduct = this.category

    this.productService.postProduct(this.product).subscribe((resp: ProductModel) => {
      this.product = resp
      alert('Produto inserido no sistema!')
      this.product = new ProductModel()
    })
  }

  logado() {
    let ok: boolean = false

    if (environment.token != '') {
      ok = true
    }

    return ok
  }

  typeUser() {
    let ok: boolean = false
    if (environment.type == "Administrador") {
      ok = true
    }

    return ok
  }

}
