import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatenschutzPage } from './datenschutz.page';

describe('DatenschutzPage', () => {
  let component: DatenschutzPage;
  let fixture: ComponentFixture<DatenschutzPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DatenschutzPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
