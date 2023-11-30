import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HolidaysPage } from './holidays.page';

describe('HolidaysPage', () => {
  let component: HolidaysPage;
  let fixture: ComponentFixture<HolidaysPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HolidaysPage],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(HolidaysPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
