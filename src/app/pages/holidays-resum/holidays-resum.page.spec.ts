import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HolidaysResumPage } from './holidays-resum.page';

describe('HolidaysResumPage', () => {
  let component: HolidaysResumPage;
  let fixture: ComponentFixture<HolidaysResumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HolidaysResumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
