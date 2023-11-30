import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AlertCancelHolComponent } from './alert-cancel-hol.component';

describe('AlertCancelHolComponent', () => {
  let component: AlertCancelHolComponent;
  let fixture: ComponentFixture<AlertCancelHolComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AlertCancelHolComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertCancelHolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
