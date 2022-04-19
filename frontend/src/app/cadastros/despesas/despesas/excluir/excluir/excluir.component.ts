import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastrosService } from 'src/app/services/cadastros.service';
import { Despesas } from 'src/models/despesa.model';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponentDesp implements OnInit {

  despesa : Despesas = new Despesas();

  constructor(private cadastro : CadastrosService,
    private router : Router,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.cadastro.buscarDespesaPorId(Number(id)).subscribe(despesa => {
      this.despesa = despesa;
  });
  }

  excluirDespesa(){
    this.cadastro.excluirDespesa(this.despesa.id).subscribe(() => {
      this.router.navigate(['/despesas']);
      this.cadastro.showMessage("Despesa excluída!");
    });
  }
}
