import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToProdutoIncluir() : void {
    this.router.navigate(['/produtos/incluir']);
  }

  navigateToProdutoListar() : void {
    this.router.navigate(['/produtos/listar']);
  }
}