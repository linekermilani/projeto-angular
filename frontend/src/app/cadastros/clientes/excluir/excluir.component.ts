import { ClienteService } from './../../../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastrosService } from 'src/app/services/cadastros.service';
import { Cliente } from 'src/models/cliente.model';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponentCliente implements OnInit {

  cliente : Cliente = new Cliente();

  constructor(private clienteService : ClienteService,
    private router : Router,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.clienteService.buscarPorId(Number(id)).subscribe(cliente => {
      this.cliente = cliente;
    });
  }

  excluirCliente(cliente : Cliente){
    this.clienteService.excluir(cliente.id).subscribe(() => {
      this.router.navigate(['/clientes']);
      this.clienteService.showMessage("Cliente Excluído!");
    });
  }
}
