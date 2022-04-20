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

  pedidos : Pedido[];
  colunas: string[] = ['id', 'data', 'nome', 'rua', 'numero','bairro', 'cidade', 'produtos', 'valor', 'acoes'];

  constructor(private router : Router ,private service : CadastrosService) {
    this.pedidos = [];
   }

  ngOnInit(): void {
    this.service.listarPedidos().subscribe(pedidos => {
      console.log(pedidos);
      this.pedidos = pedidos;
    });
  }
}
