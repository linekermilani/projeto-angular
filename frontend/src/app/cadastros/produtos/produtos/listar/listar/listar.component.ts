import { ProdutoService } from './../../../../../services/produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/models/produto.model';
import { CadastrosService } from 'src/app/services/cadastros.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  produtos : Produto[] = [];
  colunas: string[] = ['id', 'nome', 'descricao', 'preco', 'acoes'];

  constructor(private produtoService : ProdutoService) { }

  ngOnInit(): void {
    this.produtoService.listar().subscribe(produtos => {
      this.produtos = produtos;
    });
  }
}
