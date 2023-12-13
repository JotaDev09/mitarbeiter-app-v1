import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidaysResumComponent } from './holidays-resum.component';

describe('HolidaysResumComponent', () => {
  let component: HolidaysResumComponent;
  let fixture: ComponentFixture<HolidaysResumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HolidaysResumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HolidaysResumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
