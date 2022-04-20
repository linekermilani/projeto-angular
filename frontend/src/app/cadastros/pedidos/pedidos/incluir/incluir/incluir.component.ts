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

  constructor(private cadastro : CadastrosService,
    private router : Router) { }

  ngOnInit(): void {
  }

  salvarPedido(){
    this.cadastro.incluirPedido(this.pedido).subscribe(() => {
      this.router.navigate(['/pedidos']);
      this.cadastro.showMessage("Pedido criado!");
    });
  }
}
