import { Produto } from 'src/models/produto.model';
import { ProdutoService } from './../../../../../services/produto.service';
import { PedidoService } from './../../../../../services/pedido.service';
import { ClienteService } from './../../../../../services/cliente.service';
import { Cliente } from 'src/models/cliente.model';
import { Router } from '@angular/router';
import { CadastrosService } from 'src/app/services/cadastros.service';
import { Pedido } from './../../../../../../models/pedido.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incluir',
  templateUrl: './incluir.component.html',
  styleUrls: ['./incluir.component.css']
})
export class IncluirComponentPedidos implements OnInit {

  pedido : Pedido = new Pedido();
  clientes : Cliente[] = [];
  produtos : Produto[] = [];

  constructor(private pedidoService : PedidoService,
    private clienteService : ClienteService,
    private produtoService : ProdutoService,
    private router : Router) {
      let pedido = new Pedido();
      this.pedido = pedido;
     }

    ngOnInit(): void {
      this.clienteService.listar().subscribe(clientes => {
        this.clientes = clientes;
      });
      this.produtoService.listar().subscribe(produtos => {
        this.produtos = produtos;
      })
    }

  salvarPedido(){
    this.pedidoService.salvar(this.pedido).subscribe(() => {
      this.router.navigate(['/pedidos']);
      this.pedidoService.showMessage("Pedido criado!");
    });
  }
}
