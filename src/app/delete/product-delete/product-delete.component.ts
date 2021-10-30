import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/app/Model/ProductModel';
import { ProductService } from 'src/app/service/product.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: ProductModel = new ProductModel()
  idProd: number


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    if(environment.token == '') {
      this.router.navigate(['/login'])
    }

    window.scroll(0,0)

    this.idProd = this.route.snapshot.params['id']
    this.findByIdProduct(this.idProd)
  }

  findByIdProduct(id: number) {
    this.productService.getByIdProducts(id).subscribe((resp: ProductModel) => {
      this.product = resp
    })
  }

  delete() {
    this.productService.deleteProduct(this.idProd).subscribe(() => {
      alert('Produto deletado com sucesso!')
      this.router.navigate(['/products'])
    })
  }
  
}
