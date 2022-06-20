import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarComponentCliente } from './editar.component';

describe('EditarComponentCliente', () => {
  let component: EditarComponentCliente;
  let fixture: ComponentFixture<EditarComponentCliente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarComponentCliente ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarComponentCliente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
