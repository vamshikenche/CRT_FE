import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionDiBargraphComponent } from './question-di-bargraph.component';

describe('QuestionDiBargraphComponent', () => {
  let component: QuestionDiBargraphComponent;
  let fixture: ComponentFixture<QuestionDiBargraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionDiBargraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionDiBargraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
