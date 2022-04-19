import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirComponentDesp } from './incluir.component';

describe('IncluirComponentDesp', () => {
  let component: IncluirComponentDesp;
  let fixture: ComponentFixture<IncluirComponentDesp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncluirComponentDesp ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirComponentDesp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
