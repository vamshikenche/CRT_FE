import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeSectionComponent } from './practice-section.component';

describe('PracticeSectionComponent', () => {
  let component: PracticeSectionComponent;
  let fixture: ComponentFixture<PracticeSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Array Length should not be zero', ()=>{ 
    expect(component.questionArr.length).toEqual(0);
  });


});
