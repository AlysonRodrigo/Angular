import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CategoryEditComponent } from './edit/category-edit/category-edit.component';
import { CategoryDeleteComponent } from './delete/category-delete/category-delete.component';
import { ProductEditComponent } from './edit/product-edit/product-edit.component';
import { ProductDeleteComponent } from './delete/product-delete/product-delete.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { PaymentComponent } from './payment/payment.component';
import { KnifeComponent } from './knife/knife.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ProductByIdComponent } from './product-by-id/product-by-id.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch: 'full'},
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "registration", component: RegistrationComponent},
  {path: "products", component: ProductsComponent},
  {path: "category-edit/:id", component: CategoryEditComponent},
  {path: "category-delete/:id", component: CategoryDeleteComponent},
  {path: "product-edit/:id", component: ProductEditComponent},
  {path: "product-delete/:id", component: ProductDeleteComponent},
  {path: "contact", component: AboutUsComponent},
  {path: "about", component: AboutComponent},
  {path: "search", component: SearchComponent},
  {path: "payment", component: PaymentComponent},
  {path: "carrinho", component: CarrinhoComponent},
  {path: "product-by-id", component: ProductByIdComponent},
  {path: "join-us", component: KnifeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
