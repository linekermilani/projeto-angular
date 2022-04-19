import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/models/produto.model';
import { CadastrosService } from 'src/app/services/cadastros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incluir',
  templateUrl: './incluir.component.html',
  styleUrls: ['./incluir.component.css']
})
export class IncluirComponent implements OnInit {

  produto : Produto = new Produto();

  constructor(private cadastro : CadastrosService,
    private router : Router) { }

  ngOnInit(): void {
  }

  salvarProduto(){
    this.cadastro.incluirProduto(this.produto).subscribe(() => {
      this.router.navigate(['/produtos']);
      this.cadastro.showMessage("Produto criado!");
    });
  }
}
