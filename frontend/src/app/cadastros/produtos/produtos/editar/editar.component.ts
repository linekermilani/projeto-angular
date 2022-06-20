import { ProdutoService } from './../../../../services/produto.service';
import { Produto } from 'src/models/produto.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

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

  atualizarProduto(){
    this.produtoService.atualizar(this.produto).subscribe(() => {
      this.router.navigate(['/produtos']);
      this.produtoService.showMessage("Produto Editado!");
    });
  }
}
