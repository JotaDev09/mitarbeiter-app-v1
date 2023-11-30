import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ProfilPage } from './profil.page';

describe('ProfilPage', () => {
  let component: ProfilPage;
  let fixture: ComponentFixture<ProfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilPage],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ProfilPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
