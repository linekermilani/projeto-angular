import { Produto } from './../../../../models/produto.model';
import { CadastrosService } from 'src/app/services/cadastros.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos : Produto[];
  colunas: string[] = ['id', 'nome', 'descricao', 'preco', 'acoes'];

  constructor(private router : Router ,private service : CadastrosService) {
    this.produtos = [];
   }

  ngOnInit(): void {
    this.service.listar().subscribe(produtos => {
      console.log(produtos);
      this.produtos = produtos;
    });
  }
}
