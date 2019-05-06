import { Component, OnInit, Input } from '@angular/core';
import { PracticeService } from '../../services/practice.service';

import { RouterModule, Routes,Router } from '@angular/router';
@Component({
  selector: 'app-practice-section',
  templateUrl: './practice-section.component.html',
  styleUrls: ['./practice-section.component.scss']
})
export class PracticeSectionComponent implements OnInit {
  constructor(private router: Router,
    private practiceService: PracticeService) { 

  }
  
  questionArr:any = [];
  questionPanelObj:any = [];
  currentQuestion:any = {};
  currentQuestionIndex = 0;
  totalQuestionsCount = 0;
  ngOnInit() {
    this.questionArr = this.practiceService.getExamSectionData();
    this.questionPanelObj = this.practiceService.getQuestionPanelReportByUserExam();
    this.currentQuestion = this.questionArr[0];
    this.totalQuestionsCount = this.questionArr.length;
  } 


  saveAndRenderQuestion(){
    // Save User Response
    this.saveQuestionResponse();
    // renderQuestion
    this.renderQuestion();

    // Update Question Panel
    // this.questionPanelObj.QuestionPanel[this.currentQuestionIndex].user_response = 
  }

  saveQuestionResponse(){

    let currentQuestionStateInPanel = this.questionPanelObj[this.currentQuestionIndex];
    currentQuestionStateInPanel.isAnswered = true;
  }

  renderQuestion(){
    ++this.currentQuestionIndex;
    if(this.currentQuestionIndex < this.totalQuestionsCount){
      this.currentQuestion = this.questionArr[this.currentQuestionIndex];
      let newQuestionInPanel = this.questionPanelObj[this.currentQuestionIndex];
      newQuestionInPanel.isVisited = true;
    } else{
      this.router.navigate(['/home']);
    }
  }

  clearResponse(){
    let currentQuestionStateInPanel =  this.questionPanelObj[this.currentQuestionIndex];
    currentQuestionStateInPanel.isAnswered = false;
  }

  markQuestionForReview(){
    let currentQuestionStateInPanel =  this.questionPanelObj[this.currentQuestionIndex];
    currentQuestionStateInPanel.isMFR = true;
  }
}