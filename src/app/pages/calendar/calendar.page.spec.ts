import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { CalendarPage } from './calendar.page';

describe('CalendarPage', () => {
  let component: CalendarPage;
  let fixture: ComponentFixture<CalendarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarPage],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(CalendarPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
