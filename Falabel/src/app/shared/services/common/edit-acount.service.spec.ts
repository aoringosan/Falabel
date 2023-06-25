import { TestBed } from '@angular/core/testing';

import { EditAcountService } from './edit-acount.service';

describe('EditAcountService', () => {
  let service: EditAcountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditAcountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
