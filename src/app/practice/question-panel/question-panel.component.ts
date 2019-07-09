import { Component, OnInit, Input } from '@angular/core';
// import {QuestionPanelObjType} from '../../modals/type-definitions';
import { PracticeService } from '../../services/practice.service';
import { Subscription } from 'rxjs';
interface QuestionPanelObjType{
    questionId: number;
    user_response: String;
}
@Component({
  selector: 'app-question-panel',
  templateUrl: './question-panel.component.html',
  styleUrls: ['./question-panel.component.scss']
})
export class QuestionPanelComponent implements OnInit {
  @Input() questionPanelInfo:any;
  questionPanelArr: QuestionPanelObjType;
  currentQuestion; 
  currentQuestionIndex;
  QuestionPanelSubscribe = new Subscription();
  constructor(private practiceService : PracticeService) {
  }
  ngOnInit() {
    this.QuestionPanelSubscribe = this.practiceService.getQuestionPanelUpdate().subscribe(qPanel=>{
      this.questionPanelArr = qPanel.questionPanel;
    }, error =>{

    });
    this.questionPanelArr = this.questionPanelInfo.questionPanel;

  }
  ngOnChanges(changes:any){
    if(changes.questionPanelInfo.firstChange){
      this.questionPanelArr = changes.questionPanelInfo.currentValue;
    }
  }
  renderRefQuestion(questionIndex){
      this.currentQuestion = this.practiceService.renderQuestion(questionIndex);
  }

  getQuestionState(refQuesIndex){ 
    let refClass = '';
    if(this.questionPanelArr[refQuesIndex] && this.questionPanelArr[refQuesIndex].isMFR){
      refClass = 'mfr';
    }
    return refClass;
  }
}
