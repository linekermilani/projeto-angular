import { ProdutoService } from './../../../services/produto.service';
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

  produtos : Produto[] = [];
  colunas: string[] = ['id', 'nome', 'descricao', 'preco', 'acoes'];

  constructor(private produtoService : ProdutoService) { }

  ngOnInit(): void {
    this.produtoService.listar().subscribe(produtos => {
      this.produtos = produtos;
    });
  }
}
