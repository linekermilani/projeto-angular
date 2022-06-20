import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirComponentCliente } from './incluir.component';

describe('IncluirComponentCliente', () => {
  let component: IncluirComponentCliente;
  let fixture: ComponentFixture<IncluirComponentCliente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncluirComponentCliente ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirComponentCliente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
