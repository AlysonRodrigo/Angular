import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from '../Model/ProductModel';
import { ProductService } from '../service/product.service';
import { CategoryModel } from '../Model/CategoryModel';
import { CategoryService } from '../service/category.service';
import { AuthService } from '../service/auth.service';
import { environment } from 'src/environments/environment.prod';
import { __param } from 'tslib';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  category: CategoryModel = new CategoryModel()
  categoryList: CategoryModel[]
  idCateg: number
  busca: string

  product: ProductModel = new ProductModel()
  productsList: ProductModel[]

  carrinho: ProductModel[]
  quant: number
  vParcial: number

  constructor(
    private router: Router,
    private productService: ProductService,
    public authService: AuthService,
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
/*      if(environment.token == '') {
       this.router.navigate(['/login'])
     } */

    this.findAllProducts()
    this.findAllCategories()

    this.quant = 1
    this.vParcial = this.product.price
  }

  refresh() {
    this.productService.getProductsByName(this.busca).subscribe((resp: ProductModel[]) => {
      this.productsList = resp
    })
  }

  findAllCategories() {
    this.categoryService.getAllCategory().subscribe((resp: CategoryModel[]) => {
      this.categoryList = resp
    })
  }

  findAllProducts() {
    this.productService.getAllProducts().subscribe((resp: ProductModel[]) => {
      this.productsList = resp
    })
  }

  findByIdCategory(id: number) {
    this.categoryService.getByIdCategory(id).subscribe((resp: CategoryModel) => {
      this.category = resp
    })
  }

  findByIdProduct(id: number) {
    this.productService.getByIdProducts(id).subscribe((resp: ProductModel) => {
      this.product = resp
      console.log("IdCategoriaaaa: " + JSON.stringify(this.product))

    })
  }

  updateCategory() {
    this.categoryService.putCategory(this.category).subscribe((resp: CategoryModel) => {
      this.category = resp
      alert('Categoria atualizada com sucesso!')
      this.router.navigate(['/home'])
      this.category = new CategoryModel()
    })
  }

  deleteCategory(id: number) {
      this.categoryService.deleteCategory(id).subscribe(() => {
      alert('Categoria deletada com sucesso!')
      this.router.navigate(['/home'])
    })
  }

  updateProduct() {
    this.category.idCategory = this.idCateg
    this.product.categoryProduct = this.category

    this.productService.putProduct(this.product).subscribe((resp: ProductModel) => {
      this.product = resp
      if (environment.production = !("")) {
        alert('Produto atualizado com sucesso!')
        this.router.navigate(['/products'])
      } else {
        alert('Produto não atualizado tente novamente!')
        this.router.navigate(['/products'])
      }

    })
  }


  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      alert('Produto deletado com sucesso!')
      this.router.navigate(['/products'])
    })
  }

  parcial() {
    this.vParcial = this.product.price * this.quant
    return this.vParcial
  }

  photoEmpty(link: string) {
    let ok = false
    if (link == "") {
      ok = true
    }
    return ok
  }

  comprar(id: number) {
     if (environment.token == "") {
       alert('É preciso estar logado para comprar')
       this.router.navigate(["/login"])
     } else {
      environment.idProd = id
      this.router.navigate(['/product-by-id']) 
    }

  }
  
}

    

