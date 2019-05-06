import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionMcqComponent } from './question-mcq.component';

describe('QuestionMcqComponent', () => {
  let component: QuestionMcqComponent;
  let fixture: ComponentFixture<QuestionMcqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionMcqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionMcqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
