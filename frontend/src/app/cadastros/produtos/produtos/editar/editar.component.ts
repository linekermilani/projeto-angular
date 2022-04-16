import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/models/produto.model';
import { CadastrosService } from 'src/app/services/cadastros.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  produto : Produto = new Produto();

  constructor(private cadastro : CadastrosService,
    private router : Router,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.cadastro.buscarPorId(Number(id)).subscribe(produto => {
      this.produto = produto;
  });
  }

  atualizarProduto(){
    this.cadastro.atualizar(this.produto.id, this.produto).subscribe(() => {
      this.router.navigate(['/produtos']);
    });
  }
}
