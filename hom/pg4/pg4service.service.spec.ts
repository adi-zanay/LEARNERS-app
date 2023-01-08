import { TestBed } from '@angular/core/testing';

import { Pg4serviceService } from './pg4service.service';

describe('Pg4serviceService', () => {
  let service: Pg4serviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pg4serviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
