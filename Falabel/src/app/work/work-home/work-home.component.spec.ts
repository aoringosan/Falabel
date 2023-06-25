import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkHomeComponent } from './work-home.component';

describe('WorkHomeComponent', () => {
  let component: WorkHomeComponent;
  let fixture: ComponentFixture<WorkHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkHomeComponent]
    });
    fixture = TestBed.createComponent(WorkHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
