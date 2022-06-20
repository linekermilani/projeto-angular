import { ProdutoService } from './../../../../../services/produto.service';
import { Produto } from 'src/models/produto.model';
import { PedidoService } from './../../../../../services/pedido.service';
import { ClienteService } from './../../../../../services/cliente.service';
import { Cliente } from 'src/models/cliente.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CadastrosService } from './../../../../../services/cadastros.service';
import { Pedido } from './../../../../../../models/pedido.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponentPedido implements OnInit {

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
    })
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.pedidoService.buscarPorId(Number(id)).subscribe(pedido => {
      this.pedido = pedido;
  });
  }

  atualizarPedido(){
    this.pedidoService.atualizar(this.pedido).subscribe(() => {
      this.router.navigate(['/pedidos']);
      this.pedidoService.showMessage("Pedido editado!");
    });
  }
}
