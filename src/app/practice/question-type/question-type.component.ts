import { Component, OnInit, Input } from '@angular/core';
// import { QUESTIONTYPE } from 
@Component({
  selector: 'app-question-type',
  templateUrl: './question-type.component.html',
  styleUrls: ['./question-type.component.scss']
})
export class QuestionTypeComponent implements OnInit {
  @Input() currentQuestionObj: any;
  currentQuestionInfo:any;
  constructor() { }
  ngOnInit() {
    this.currentQuestionInfo = this.currentQuestionObj;
  }
  ngOnChanges(changes:any){
    this.currentQuestionInfo = changes.currentQuestionObj.currentValue;
  }
}
