import { Component, OnInit, Input } from '@angular/core';
import { MCQ } from '../../../modals/question.modals';
@Component({
  selector: 'app-question-di-bargraph',
  templateUrl: './question-di-bargraph.component.html',
  styleUrls: ['./question-di-bargraph.component.scss']
})
export class QuestionDiBargraphComponent implements OnInit {
  @Input() questionObj:any;
  constructor() { }
  questionsArr:any;
  currentQuestion:any;
  ngOnInit() {
    this.currentQuestion = this.questionObj;
  }

}
