import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EnterComponent } from './enter/enter.component';

const routes: Routes = [
  
  {path: '', redirectTo:'enter', pathMatch: 'full'},
  {path:"enter", component: EnterComponent},
  {path:"cadastro",component:CadastroComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
