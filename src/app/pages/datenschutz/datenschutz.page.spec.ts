import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DatenschutzPage } from './datenschutz.page';

describe('DatenschutzPage', () => {
  let component: DatenschutzPage;
  let fixture: ComponentFixture<DatenschutzPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatenschutzPage],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(DatenschutzPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
