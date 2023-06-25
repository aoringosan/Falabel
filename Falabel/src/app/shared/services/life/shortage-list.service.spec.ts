import { TestBed } from '@angular/core/testing';

import { ShortageListService } from './shortage-list.service';

describe('ShortageListService', () => {
  let service: ShortageListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShortageListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
