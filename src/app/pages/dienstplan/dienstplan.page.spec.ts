import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DienstplanPage } from './dienstplan.page';

describe('DienstplanPage', () => {
  let component: DienstplanPage;
  let fixture: ComponentFixture<DienstplanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DienstplanPage],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(DienstplanPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
