import { ProdutoService } from './../../../../../services/produto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastrosService } from 'src/app/services/cadastros.service';
import { Produto } from 'src/models/produto.model';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent implements OnInit {

  produto : Produto = new Produto();

  constructor(private produtoService : ProdutoService,
    private router : Router,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.produtoService.buscarPorId(Number(id)).subscribe(produto => {
      this.produto = produto;
    });
  }

  excluirProduto(produto : Produto){
    this.produtoService.excluir(produto.id).subscribe(() => {
      this.router.navigate(['/produtos']);
      this.produtoService.showMessage("Produto Excluído!");
    });
  }
}
