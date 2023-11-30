import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AlertEditDienstComponent } from './alert-edit-dienst.component';

describe('AlertEditDienstComponent', () => {
  let component: AlertEditDienstComponent;
  let fixture: ComponentFixture<AlertEditDienstComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AlertEditDienstComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertEditDienstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
