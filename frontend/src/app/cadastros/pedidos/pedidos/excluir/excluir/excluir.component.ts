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

  constructor(private cadastro : CadastrosService,
    private router : Router,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.cadastro.buscarPedidoPorId(Number(id)).subscribe(pedido => {
      this.pedido = pedido;
  });
  }

  excluirPedido(){
    this.cadastro.excluirPedido(this.pedido.id).subscribe(() => {
      this.router.navigate(['/pedidos']);
      this.cadastro.showMessage("Pedido excluido!");
    });
  }
}