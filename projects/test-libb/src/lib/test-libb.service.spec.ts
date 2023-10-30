import { TestBed } from '@angular/core/testing';

import { TestLibbService } from './test-libb.service';

describe('TestLibbService', () => {
  let service: TestLibbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestLibbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
