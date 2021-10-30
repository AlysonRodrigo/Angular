import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { ProductModel } from '../Model/ProductModel';
import { UserModel } from '../Model/UserModel';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-by-id',
  templateUrl: './product-by-id.component.html',
  styleUrls: ['./product-by-id.component.css']
})
export class ProductByIdComponent implements OnInit {

  product: ProductModel = new ProductModel()

  shoppingCart: ProductModel[]
  quant: number
  vParcial: number
  

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    let id = this.route.snapshot.params['id']
    this.findProdById()
    this.quant = 1
  }

  findProdById() {
    this.productService.getByIdProducts(environment.idProd).subscribe((resp: ProductModel) => {
      this.product = resp
    })
  }

  quantityChange(value: number) {
    this.quant += value;
    if (this.quant < 1) {
      this.quant = 1;
    } else if (this.quant >= 10) {
      this.quant = 10
    }
  }

  parcial() {
    this.vParcial = this.product.price * this.quant
    return this.vParcial
  }

  addShopCart() {
    this.parcial()
    this.product.quantity = this.quant
    this.product.parcialValue = this.vParcial

    this.shoppingCart = JSON.parse(localStorage.getItem('shoppingCart') || '[]')

    this.shoppingCart.push({
      idProduct: this.product.idProduct,
      name: this.product.name,
      brand: this.product.brand,
      description: this.product.description,
      price: this.product.price,
      photo: this.product.photo,
      categoryProduct: this.product.categoryProduct,
      quantity: this.product.quantity,
      parcialValue: this.product.parcialValue
    })

    localStorage.setItem('shoppingCart', JSON.stringify(this.shoppingCart))

    this.router.navigate(['/carrinho'])
  }
}


