import { Component, OnInit, Input } from '@angular/core';
import { MCQ } from '../../../modals/question.modals';
@Component({
  selector: 'app-question-mcq',
  templateUrl: './question-mcq.component.html',
  styleUrls: ['./question-mcq.component.scss']
})
export class QuestionMcqComponent implements OnInit {
  @Input() questionObj:any;
  questionsArr = [];
  currentQuestion = {};
  constructor() { }

  ngOnInit() {
    // this.questionsArr = MCQ;
    this.currentQuestion = this.questionObj;
  }
  ngOnChanges(changes:any){
    this.currentQuestion = changes.questionObj.currentValue;
  }
}
