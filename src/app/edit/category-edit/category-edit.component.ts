import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryModel } from 'src/app/Model/CategoryModel';
import { CategoryService } from 'src/app/service/category.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  category: CategoryModel = new CategoryModel()

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if(environment.token == '') {
      this.router.navigate(['/login'])
    }

    let id = this.route.snapshot.params['id']
    this.findByIdCategory(id)
  }

  findByIdCategory(id: number) {
    this.categoryService.getByIdCategory(id).subscribe((resp: CategoryModel) => {
      this.category = resp
    })
  }

  update() {
    this.categoryService.putCategory(this.category).subscribe((resp: CategoryModel) => {
      this.category = resp
      alert('Categoria atualizada com sucesso!')
      this.router.navigate(['/products'])
      this.category = new CategoryModel()
    })
  }

}
