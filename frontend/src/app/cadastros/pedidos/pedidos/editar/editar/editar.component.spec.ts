import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarComponentPedido } from './editar.component';

describe('EditarComponentPedido', () => {
  let component: EditarComponentPedido;
  let fixture: ComponentFixture<EditarComponentPedido>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarComponentPedido ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarComponentPedido);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
