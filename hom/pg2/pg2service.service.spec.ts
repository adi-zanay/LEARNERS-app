import { TestBed } from '@angular/core/testing';

import { Pg2serviceService } from './pg2service.service';

describe('Pg2serviceService', () => {
  let service: Pg2serviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pg2serviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
