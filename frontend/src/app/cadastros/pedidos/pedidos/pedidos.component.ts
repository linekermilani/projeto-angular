import { Produto } from 'src/models/produto.model';
import { Cliente } from 'src/models/cliente.model';
import { ProdutoService } from './../../../services/produto.service';
import { ClienteService } from './../../../services/cliente.service';
import { PedidoService } from './../../../services/pedido.service';
import { CadastrosService } from 'src/app/services/cadastros.service';
import { Router } from '@angular/router';
import { Pedido } from './../../../../models/pedido.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedidos : Pedido[] = [];
  clientes : Cliente[] = [];
  produtos : Produto[] = [];
  colunas: string[] = ['id', 'data', 'cliente', 'produtos', 'valor', 'acoes'];

  constructor(private pedidoService : PedidoService, 
    private clienteService : ClienteService, 
    private produtoService : ProdutoService) { }

  ngOnInit(): void {
    this.clienteService.listar().subscribe(clientes => {
      this.clientes = clientes;
    });
    this.produtoService.listar().subscribe(produtos => {
      this.produtos = produtos;
    })
    this.pedidoService.listar().subscribe(pedidos => {
      this.pedidos = pedidos;
    });
  }
}
