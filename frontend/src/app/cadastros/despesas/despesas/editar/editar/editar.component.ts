import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastrosService } from 'src/app/services/cadastros.service';
import { Despesas } from 'src/models/despesa.model';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponentDesp implements OnInit {

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

  atualizarDespesa(){
    this.cadastro.atualizarDespesa(this.despesa.id, this.despesa).subscribe(() => {
      this.router.navigate(['/despesas']);
    });
  }
}
