import { Component, OnInit, Input } from '@angular/core';
import { MCQ } from '../../../modals/question.modals';
import { PracticeService } from '../../../services/practice.service';
@Component({
  selector: 'app-question-mcq',
  templateUrl: './question-mcq.component.html',
  styleUrls: ['./question-mcq.component.scss']
})
export class QuestionMcqComponent implements OnInit {
  @Input() questionObj:any;
  questionsArr = [];
  currentQuestion = {};
  
  constructor(private practiceService : PracticeService) { }
  ngOnInit() {
    this.currentQuestion = this.questionObj;
  }
  ngOnChanges(changes:any){
    if(changes.questionObj){
      this.currentQuestion = changes.questionObj.currentValue;
    }
  }
}
