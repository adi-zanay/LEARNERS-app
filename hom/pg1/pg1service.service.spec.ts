import { TestBed } from '@angular/core/testing';

import { Pg1serviceService } from './pg1service.service';

describe('Pg1serviceService', () => {
  let service: Pg1serviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pg1serviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
