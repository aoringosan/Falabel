import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeHomeComponent } from './life-home.component';

describe('LifeHomeComponent', () => {
  let component: LifeHomeComponent;
  let fixture: ComponentFixture<LifeHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LifeHomeComponent]
    });
    fixture = TestBed.createComponent(LifeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
