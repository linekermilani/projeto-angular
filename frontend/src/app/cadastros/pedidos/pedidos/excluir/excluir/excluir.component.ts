import { ProdutoService } from './../../../../../services/produto.service';
import { Produto } from 'src/models/produto.model';
import { ClienteService } from './../../../../../services/cliente.service';
import { PedidoService } from './../../../../../services/pedido.service';
import { Cliente } from 'src/models/cliente.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CadastrosService } from 'src/app/services/cadastros.service';
import { Pedido } from './../../../../../../models/pedido.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponentPedido implements OnInit {

  pedido : Pedido = new Pedido();
  clientes : Cliente[] = [];
  produtos : Produto[] = [];

  constructor(private pedidoService : PedidoService,
    private clienteService : ClienteService,
    private produtoService : ProdutoService,
    private router : Router,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.clienteService.listar().subscribe(clientes => {
      this.clientes = clientes;
     });
     this.produtoService.listar().subscribe(produtos => {
      this.produtos = produtos;
     });
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.pedidoService.buscarPorId(Number(id)).subscribe(pedido => {
      this.pedido = pedido;
  });
  }

  excluirPedido(){
    this.pedidoService.excluir(this.pedido.id).subscribe(() => {
      this.router.navigate(['/pedidos']);
      this.pedidoService.showMessage("Pedido excluido!");
    });
  }
}