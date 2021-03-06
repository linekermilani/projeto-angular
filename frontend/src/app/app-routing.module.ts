import { EditarComponentCliente } from './cadastros/clientes/editar/editar.component';
import { ExcluirComponentCliente } from './cadastros/clientes/excluir/excluir.component';
import { IncluirComponentCliente } from './cadastros/clientes/listar-clientes/incluir/incluir.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './cadastros/produtos/produtos/produtos.component';
import { PedidosComponent } from './cadastros/pedidos/pedidos/pedidos.component';
import { DespesasComponent } from './cadastros/despesas/despesas/despesas.component';
import { IncluirComponent } from './cadastros/produtos/produtos/incluir/incluir.component';
import { EditarComponent } from './cadastros/produtos/produtos/editar/editar.component';
import { EditarComponentDesp } from './cadastros/despesas/despesas/editar/editar/editar.component';
import { ListarComponent } from './cadastros/produtos/produtos/listar/listar/listar.component';
import { ExcluirComponent } from './cadastros/produtos/produtos/excluir/excluir/excluir.component';
import { IncluirComponentDesp } from './cadastros/despesas/despesas/incluir/incluir/incluir.component';
import { ExcluirComponentDesp } from './cadastros/despesas/despesas/excluir/excluir/excluir.component';
import { IncluirComponentPedidos } from './cadastros/pedidos/pedidos/incluir/incluir/incluir.component';
import { EditarComponentPedido } from './cadastros/pedidos/pedidos/editar/editar/editar.component';
import { ExcluirComponentPedido } from './cadastros/pedidos/pedidos/excluir/excluir/excluir.component';
import { ListarClientesComponent } from './cadastros/clientes/listar-clientes/listar-clientes.component';

const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "produtos", component: ProdutosComponent},
    {path: "pedidos", component: PedidosComponent},
    {path: "despesas", component: DespesasComponent},
    {path: "clientes", component: ListarClientesComponent},
    {path: "produtos/incluir", component: IncluirComponent},
    {path: "produtos/editar/:id", component: EditarComponent},
    {path: "produtos/listar", component: ListarComponent},
    {path: "produtos/excluir/:id", component: ExcluirComponent},
    {path: "despesas/editar/:id", component: EditarComponentDesp},
    {path: "despesas/incluir", component: IncluirComponentDesp},
    {path: "despesas/excluir/:id", component: ExcluirComponentDesp},
    {path: "pedidos/incluir", component: IncluirComponentPedidos},
    {path: "pedidos/editar/:id", component: EditarComponentPedido},
    {path: "pedidos/excluir/:id", component: ExcluirComponentPedido},
    {path: "clientes/incluir", component: IncluirComponentCliente},
    {path: "clientes/excluir/:id", component: ExcluirComponentCliente},
    {path: "clientes/editar/:id", component: EditarComponentCliente},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
