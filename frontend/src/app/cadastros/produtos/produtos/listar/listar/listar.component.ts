import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/models/produto.model';
import { CadastrosService } from 'src/app/services/cadastros.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  produtos : Produto[];
  colunas: string[] = ['id', 'nome', 'descricao', 'preco', 'acoes'];

  constructor(private service : CadastrosService) {
    this.produtos = [];
   }

  ngOnInit(): void {
    this.service.listar().subscribe(produtos => {
      console.log(produtos);
      this.produtos = produtos;
    });
  }

}
