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

  constructor(private cadastro : CadastrosService,
    private router : Router,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.cadastro.buscarPedidoPorId(Number(id)).subscribe(pedido => {
      this.pedido = pedido;
  });
  }

  atualizarPedido(){
    this.cadastro.atualizarPedido(this.pedido.id, this.pedido).subscribe(() => {
      this.router.navigate(['/pedidos']);
      this.cadastro.showMessage("Pedido editado!");
    });
  }
}
