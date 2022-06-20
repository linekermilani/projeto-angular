import { TestBed } from '@angular/core/testing';

import { Generic.CrudService } from './generic.crud.service';

describe('Generic.CrudService', () => {
  let service: Generic.CrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Generic.CrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
