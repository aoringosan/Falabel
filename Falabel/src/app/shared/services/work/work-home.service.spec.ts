import { TestBed } from '@angular/core/testing';

import { WorkHomeService } from './work-home.service';

describe('WorkHomeService', () => {
  let service: WorkHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
