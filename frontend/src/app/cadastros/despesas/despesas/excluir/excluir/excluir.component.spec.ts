import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirComponentDesp } from './excluir.component';

describe('ExcluirComponentDesp', () => {
  let component: ExcluirComponentDesp;
  let fixture: ComponentFixture<ExcluirComponentDesp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirComponentDesp ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluirComponentDesp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
