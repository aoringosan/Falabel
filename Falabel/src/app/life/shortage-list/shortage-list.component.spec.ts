import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortageListComponent } from './shortage-list.component';

describe('ShortageListComponent', () => {
  let component: ShortageListComponent;
  let fixture: ComponentFixture<ShortageListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShortageListComponent]
    });
    fixture = TestBed.createComponent(ShortageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
