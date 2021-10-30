import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { ProductModel } from '../Model/ProductModel';
import { AuthService } from '../service/auth.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  product: ProductModel = new ProductModel
  shoppingCart: ProductModel[]
  vParcial: number
  totalValue: number
  empty: string
  quant: number
  carrinhoOb = {
    valor: 0
  }

  constructor(
    private authService: AuthService,
    private productService: ProductService,
    private router: Router

  ) { }

  ngOnInit(){
    window.scroll(0,0)
     if (environment.token == "") {
      alert('Você precisa estar logado para comprar.')
      this.router.navigate(["/login"])
 
    }
    this.showCart()
    this.showTotal()

    console.log('PREÇO: ' + JSON.stringify(this.shoppingCart))
  }

  showCart() {
    const storage = localStorage['shoppingCart']
    if (storage.length > 0) {
      this.shoppingCart = storage ? JSON.parse(storage) : []
    } else {
      this.empty = "O Carrinho está vazio"
      this.totalValue = 0
    }
  }

  showTotal() {
    this.totalValue = 0
    let dataCart = []
    dataCart = JSON.parse(localStorage.getItem('shoppingCart') || '{}')

    dataCart.forEach((i: any) => {
      this.carrinhoOb = {
        valor: i.parcialValue
      }

      this.totalValue += this.carrinhoOb.valor
    })
    return this.totalValue
  }

  priceSum() {
    console.log('PREÇO: ' + JSON.stringify(this.totalValue))

    this.shoppingCart.forEach(item => {
      this.totalValue += item.price      
    });
    console.log('PREÇO2: ' + JSON.stringify(this.totalValue))
  }

}
