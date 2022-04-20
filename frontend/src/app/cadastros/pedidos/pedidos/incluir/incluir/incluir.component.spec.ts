import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirComponentPedidos } from './incluir.component';

describe('IncluirComponentPedidos', () => {
  let component: IncluirComponentPedidos;
  let fixture: ComponentFixture<IncluirComponentPedidos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncluirComponentPedidos ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirComponentPedidos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
