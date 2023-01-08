import { TestBed } from '@angular/core/testing';

import { Pg3serviceService } from './pg3service.service';

describe('Pg3serviceService', () => {
  let service: Pg3serviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pg3serviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
