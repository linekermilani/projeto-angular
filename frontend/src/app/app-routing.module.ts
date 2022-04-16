import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './cadastros/produtos/produtos/produtos.component';
import { PedidosComponent } from './cadastros/pedidos/pedidos/pedidos.component';
import { DespesasComponent } from './cadastros/despesas/despesas/despesas.component';
import { IncluirComponent } from './cadastros/produtos/produtos/incluir/incluir.component';

const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "produtos", component: ProdutosComponent},
    {path: "pedidos", component: PedidosComponent},
    {path: "despesas", component: DespesasComponent},
    {path: "produtos/incluir", component: IncluirComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
