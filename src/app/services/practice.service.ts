import { Injectable } from '@angular/core';
import { MCQ, STUDENT_QUESTION_RESPONSES } from '../modals/question.modals';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PracticeService {

  constructor() { 

  }
  currentExamQuestions = [];
  questionPanelObj = {};
  getExamSectionData(){
    this.currentExamQuestions =  MCQ;
    return this.currentExamQuestions;
  }
  getQuestionPanelReportByUserExam(){
    this.questionPanelObj = STUDENT_QUESTION_RESPONSES;
    return this.questionPanelObj;
  }

  saveUserResponse(){

  }
  
  updateQuestionPanel(){
    // this.questionPanelObj[]
  }
}
