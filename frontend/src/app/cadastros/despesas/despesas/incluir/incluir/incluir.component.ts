import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadastrosService } from 'src/app/services/cadastros.service';
import { Despesas } from 'src/models/despesa.model';

@Component({
  selector: 'app-incluir',
  templateUrl: './incluir.component.html',
  styleUrls: ['./incluir.component.css']
})
export class IncluirComponentDesp implements OnInit {

  despesa : Despesas = new Despesas();

  constructor(private cadastro : CadastrosService,
    private router : Router) { }

  ngOnInit(): void {
  }

  salvarDespesa(){
    this.cadastro.incluirDespesa(this.despesa).subscribe(() => {
      this.router.navigate(['/despesas']);
      this.cadastro.showMessage("Despesa criada!");
    });
  }
}
