import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirComponentPedido } from './excluir.component';

describe('ExcluirComponentPedido', () => {
  let component: ExcluirComponentPedido;
  let fixture: ComponentFixture<ExcluirComponentPedido>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirComponentPedido ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluirComponentPedido);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
