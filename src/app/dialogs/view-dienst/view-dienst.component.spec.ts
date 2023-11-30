import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewDienstComponent } from './view-dienst.component';

describe('ViewDienstComponent', () => {
  let component: ViewDienstComponent;
  let fixture: ComponentFixture<ViewDienstComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ViewDienstComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewDienstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
