import { ClienteService } from './../../../../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadastrosService } from 'src/app/services/cadastros.service';
import { Cliente } from 'src/models/cliente.model';

@Component({
  selector: 'app-incluir',
  templateUrl: './incluir.component.html',
  styleUrls: ['./incluir.component.css']
})
export class IncluirComponentCliente implements OnInit {

  cliente : Cliente = new Cliente();

  constructor(private clienteService : ClienteService,
    private router : Router) {
      let cliente = new Cliente();
      this.cliente = cliente;
     }

  ngOnInit(): void {
    
  }

  salvarCliente(){
    this.clienteService.salvar(this.cliente).subscribe(() => {
      this.router.navigate(['/clientes']);
      this.clienteService.showMessage("Cliente criado!");
    });
  }
}
