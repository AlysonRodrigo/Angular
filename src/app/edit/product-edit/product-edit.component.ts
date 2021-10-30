import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryModel } from 'src/app/Model/CategoryModel';
import { ProductModel } from 'src/app/Model/ProductModel';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: ProductModel = new ProductModel()

  category: CategoryModel = new CategoryModel()
  categoryList: CategoryModel[]
  idCateg: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    if(environment.token == '') {
      this.router.navigate(['/login'])
    }

    window.scroll(0,0)

    let id = this.route.snapshot.params['id']
    this.findByIdProduct(id)
    this.findAllCategory()
  }

  findByIdProduct(id: number) {
    this.productService.getByIdProducts(id).subscribe((resp: ProductModel) => {
      this.product = resp
    })
  }

  findByIdCategory() {
    this.categoryService.getByIdCategory(this.idCateg).subscribe((resp: CategoryModel) => {
      this.category = resp
    })
  }

  findAllCategory() {
    this.categoryService.getAllCategory().subscribe((resp: CategoryModel[]) => {
      this.categoryList = resp
    })
  }

  update() {
    this.category.idCategory = this.idCateg
    this.product.categoryProduct = this.category

    this.productService.putProduct(this.product).subscribe((resp: ProductModel) => {
      this.product = resp
      alert('Produto atualizado com sucesso!')
      this.router.navigate(['/products'])
    })
  }

}
