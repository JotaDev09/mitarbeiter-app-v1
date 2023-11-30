import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AlertLicenseComponent } from './alert-license.component';

describe('AlertLicenseComponent', () => {
  let component: AlertLicenseComponent;
  let fixture: ComponentFixture<AlertLicenseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AlertLicenseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
