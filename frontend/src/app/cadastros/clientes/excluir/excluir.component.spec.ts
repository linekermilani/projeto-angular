import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirComponentCliente } from './excluir.component';

describe('ExcluirComponentCliente', () => {
  let component: ExcluirComponentCliente;
  let fixture: ComponentFixture<ExcluirComponentCliente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirComponentCliente ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluirComponentCliente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
