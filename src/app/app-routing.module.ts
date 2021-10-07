import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { EnterComponent } from './enter/enter.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [

  { path: '', redirectTo: 'enter', pathMatch: 'full' },
  { path: "enter", component: EnterComponent },
  { path: "cadastro", component: CadastroComponent },

  { path: "inicio", component: InicioComponent },
  { path: "tema", component: TemaComponent },

  {path: "tema-edit/:id", component:TemaEditComponent},
  {path: 'tema-delete/:id', component:TemaDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
