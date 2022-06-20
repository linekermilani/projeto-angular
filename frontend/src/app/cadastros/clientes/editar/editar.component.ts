import { ClienteService } from './../../../services/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from './../../../../models/cliente.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponentCliente implements OnInit {

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

  atualizarCliente(){
    this.clienteService.atualizar(this.cliente).subscribe(() => {
      this.router.navigate(['/clientes']);
      this.clienteService.showMessage("Cliente Editado!");
    });
  }
}
