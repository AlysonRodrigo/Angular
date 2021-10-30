import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../Model/ProductModel';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  busca: string
  product: ProductModel = new ProductModel()
  listProduct: ProductModel[]

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.busca = this.route.snapshot.params['busca']
    this.search(this.busca)
  }

  search(busca: string){
    this.productService.getProductsByName(busca).subscribe((resp: ProductModel[])=>{
      this.listProduct = resp
    })
  }

}
