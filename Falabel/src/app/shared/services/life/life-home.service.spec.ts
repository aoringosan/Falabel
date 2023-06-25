import { TestBed } from '@angular/core/testing';

import { LifeHomeService } from './life-home.service';

describe('LifeHomeService', () => {
  let service: LifeHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LifeHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
