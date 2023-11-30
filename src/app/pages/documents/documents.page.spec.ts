import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DocumentsPage } from './documents.page';

describe('DocumentsPage', () => {
  let component: DocumentsPage;
  let fixture: ComponentFixture<DocumentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentsPage],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(DocumentsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
