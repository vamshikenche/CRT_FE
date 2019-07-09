import { Injectable } from '@angular/core';
import { EXAM1, MCQ, QUESTION_PANEL } from '../modals/question.modals';
import { Observable, Subject } from 'rxjs';
// import { 
//   ExamResponsesType, 
//   QuestionResponseType, 
//   ExamQPanelType, 
//   QuestionQPanelType, 
//   ExamMetaType 
// } from '../modals/type-definitions';
interface QuestionOption{
  id: string,
  value : string
}
@Injectable({
  providedIn: 'root'
})
export class PracticeService {
  private CurrentQuestionSubject = new Subject();
  private QuestionPanelSubject = new Subject();
  private CurrentQuestionIndexSubject = new Subject();
  constructor() { 
    // this.getExamSectionData()
  }
  currentQuestionIndex:number = 0;
  currentQuestionObj;
  // The three objects
  // 1. Questions Array
  // 2. Question Panel Info
  // 3. Test Meta Data
  // 4. Record Responses
  // Obeservable

  examData = {};
  examQuestions = {};
  questionPanelObj = {};
  currentTestMetaData = {};
  examResponses = {};

  currentQuestionResponse: QuestionOption;
  getExamData(){
    this.examData = EXAM1;
    this.examQuestions = this.examData['questions'];
    return this.examData;
  }
  getQuestionsByExam() {
    this.examQuestions =  MCQ;
    this.currentQuestionObj = Object.assign({}, this.examQuestions[this.currentQuestionIndex]);
    
    this.setCurrentQuestion(this.currentQuestionObj);
    return (this.examQuestions);
  } 
  
  renderQuestion(questionIndex?:number){
    if(questionIndex == undefined){
      // If Save & Next
      if(this.examQuestions[this.currentQuestionIndex+1]){
        this.currentQuestionIndex += 1;
      }
    } else{
      // If from Right Side Panel
      this.currentQuestionIndex = questionIndex;
    }
    this.currentQuestionObj =  this.examQuestions[this.currentQuestionIndex];
    this.setCurrentQuestion(this.currentQuestionObj);
    this.setCurrentQuestionIndex(this.currentQuestionIndex);
    return this.currentQuestionObj;
  }

  getQuestionPanelByExam(){
    this.questionPanelObj = QUESTION_PANEL;
    return this.questionPanelObj;
  }
  saveUserResponse(){

  }

  setCurrentQuestion(refQuestionObject){
    this.CurrentQuestionSubject.next(refQuestionObject);
  }
  getCurrentQuestion() : Observable<any>{
    return this.CurrentQuestionSubject.asObservable();
  }


  setCurrentQuestionResponse(quesResp){
    this.currentQuestionResponse = quesResp;
  }
  getCurrentQuestionResponse(){
    return this.currentQuestionResponse;
  }

  setCurrentQuestionIndex(currentQuesIndex){
    this.currentQuestionIndex = currentQuesIndex;
    this.CurrentQuestionIndexSubject.next(currentQuesIndex);
  }

  getCurrentQuestionIndex() : Observable<any>{
    return this.CurrentQuestionIndexSubject.asObservable();
  }
  updateQuestionPanel(refQpanel){
    this.QuestionPanelSubject.next(refQpanel);
  }

  getQuestionPanelUpdate() : Observable<any>{
    return this.QuestionPanelSubject.asObservable();
  }

  

}
