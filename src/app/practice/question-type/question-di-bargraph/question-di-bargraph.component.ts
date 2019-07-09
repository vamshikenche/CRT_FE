import { Component, OnInit, Input } from '@angular/core';
import { MCQ } from '../../../modals/question.modals';
import { PracticeService } from '../../../services/practice.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-question-di-bargraph',
  templateUrl: './question-di-bargraph.component.html',
  styleUrls: ['./question-di-bargraph.component.scss']
})
export class QuestionDiBargraphComponent implements OnInit {
  @Input() questionObj:any;
  constructor(private practiceService : PracticeService) { }
  questionsArr:any;
  currentQuestion:any;
  ngOnInit() {
    this.currentQuestion = this.questionObj;
  }
  ngOnChanges(changes:any){
    if(changes.questionObj){
      this.currentQuestion = changes.questionObj.currentValue;
    } 
  }
}
