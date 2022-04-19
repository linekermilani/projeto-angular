import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadastrosService } from 'src/app/services/cadastros.service';
import { Despesas } from 'src/models/despesa.model';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.css']
})
export class DespesasComponent implements OnInit {

  despesas : Despesas[];
  colunas: string[] = ['id', 'nome', 'descricao', 'preco', 'acoes'];

  constructor(private router : Router ,private service : CadastrosService) {
    this.despesas = [];
   }

  ngOnInit(): void {
    this.service.listarDespesas().subscribe(despesas => {
      console.log(despesas);
      this.despesas = despesas;
    });
  }
}
