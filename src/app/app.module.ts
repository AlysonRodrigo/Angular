import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutComponent } from './about/about.component';

import { CategoryEditComponent } from './edit/category-edit/category-edit.component';
import { CategoryDeleteComponent } from './delete/category-delete/category-delete.component';
import { ProductEditComponent } from './edit/product-edit/product-edit.component';
import { ProductDeleteComponent } from './delete/product-delete/product-delete.component';
import { SearchComponent } from './search/search.component';
import { PaymentComponent } from './payment/payment.component';
import { KnifeComponent } from './knife/knife.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ProductByIdComponent } from './product-by-id/product-by-id.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegistrationComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    CategoryEditComponent,
    CategoryDeleteComponent,
    AboutComponent,
    ProductEditComponent,
    ProductDeleteComponent,
    AboutUsComponent,
    SearchComponent,
    PaymentComponent,
    CarrinhoComponent,
    ProductByIdComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
