import { ClienteService } from './../../../services/cliente.service';
import { CadastrosService } from 'src/app/services/cadastros.service';
import { Router } from '@angular/router';
import { Cliente } from './../../../../models/cliente.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  clientes : Cliente[] = [];
  colunas: string[] = ['id', 'nome', 'cpf', 'telefone', 'acoes'];

  constructor(private clienteService : ClienteService) { }

   ngOnInit(): void {
    this.clienteService.listar().subscribe(clientes => {
      this.clientes = clientes;
    });
  }
}
