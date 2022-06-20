import { ProdutoService } from './../../../../services/produto.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadastrosService } from 'src/app/services/cadastros.service';
import { Produto } from 'src/models/produto.model';

@Component({
  selector: 'app-incluir',
  templateUrl: './incluir.component.html',
  styleUrls: ['./incluir.component.css']
})
export class IncluirComponent implements OnInit {

  produto : Produto = new Produto();

  constructor(private produtoService : ProdutoService,
    private router : Router) {
      let produto = new Produto();
      this.produto = produto;
     }

  ngOnInit(): void {
    
  }

  salvarProduto(){
    this.produtoService.salvar(this.produto).subscribe(() => {
      this.router.navigate(['/produtos']);
      this.produtoService.showMessage("Produto criado!");
    });
  }
}
