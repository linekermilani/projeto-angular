import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarComponentDesp } from './editar.component';

describe('EditarComponentDesp', () => {
  let component: EditarComponentDesp;
  let fixture: ComponentFixture<EditarComponentDesp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarComponentDesp ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarComponentDesp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
