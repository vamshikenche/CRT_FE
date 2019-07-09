import { Component, OnInit, Input } from '@angular/core';
import { PracticeService } from '../../services/practice.service';
import { RouterModule, Routes,Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { ExamResponse, QuestionResponse, QuestionPanel, ExamMeta } from './question-response'; 
@Component({
  selector: 'app-practice-section',
  templateUrl: './practice-section.component.html',
  styleUrls: ['./practice-section.component.scss']
})
export class PracticeSectionComponent implements OnInit {
  private QuestionPanelSubject = new Subject();
  private CurrentQuestionIndex = new Subscription();
  QuestionPanelSubscribe = new Subscription();


  // For Saving Response purpose
  examData: any = {};
  examResponseObject : ExamResponse;
  questionResponseObject : QuestionResponse;
  questionPanelObject: QuestionPanel;
  examMetaObject: ExamMeta;


  


  constructor(private router: Router,
    private practiceService: PracticeService) { 
  }
  examTime:any = 300; // in seconds
  questionArr:any = [];
  questionPanelObj:any = [];
  currentQuestion:any = {};
  currentQuestionIndex = 0;
  totalQuestionsCount = 0;
  public show = true;
  public mainContent = "80";



  toggle() {
    this.show = !this.show;
    this.show? this.mainContent = "78" : this.mainContent = "100";
  } 
  ngOnInit() {
    // Create Exam Response Object
    this.examResponseObject = new ExamResponse();
    
    // Get the Exam Data
    this.examData = this.practiceService.getExamData();

    this.questionArr = this.examData['questions'];
    // this.questionArr = this.practiceService.getQuestionsByExam();
    this.questionPanelObj = this.practiceService.getQuestionPanelByExam();
    this.practiceService.updateQuestionPanel(this.questionPanelObj);
    this.practiceService.getCurrentQuestionIndex().subscribe((currentQuesIndex)=>{
      this.currentQuestionIndex = currentQuesIndex;
    });
    this.currentQuestion = this.questionArr[0];
    this.totalQuestionsCount = this.questionArr.length;
  } 
  onClickSaveNext(){
   /*
    step1: prepare question response object
    step2: prepare qpanel object
    step3: prepare meta object
    step4: push these three object into main object
    step5: post to server. or save to local db
    */

    // start: step1
      this.questionResponseObject = new QuestionResponse();
      this.questionResponseObject.userAnswer = this.practiceService.getCurrentQuestionResponse();
      this.questionResponseObject.allottedScore = this.currentQuestion.allottedScore;
      this.questionResponseObject.negativeScore = this.currentQuestion.negativeScore;
      this.questionResponseObject.questionId = this.currentQuestion.questionId;
      this.questionResponseObject.chapterId = this.currentQuestion.chapterID;
      this.questionResponseObject.sectionId = this.currentQuestion.sectionID;
      this.questionResponseObject.timeTaken = this.calcTimeTakenPerQuestion();
    // end: step1

    // start: step2
      this.questionPanelObject = new QuestionPanel();
      this.questionPanelObject.isMFR = this.isQuestionMFR(this.currentQuestionIndex);
      this.questionPanelObject.isAnswered = this.isQuestionAnswered(this.currentQuestionIndex);
      this.questionPanelObject.isVisited = this.isQuestionVisited(this.currentQuestionIndex);
    // end: step2 

    // start: step3
      this.examMetaObject = new ExamMeta();
      this.examMetaObject.totalExamTime = this.examData.examTime;
      this.examMetaObject.timeElapsed = this.calcElapsedTimeOfExam();
    // end:: step3
    if(this.examResponseObject.questionResponses){
      this.examResponseObject.questionResponses.push(this.questionResponseObject);
    } else{
      this.examResponseObject.questionResponses = [this.questionResponseObject];
    }
    if(this.examResponseObject.questionPanel){
      this.examResponseObject.questionPanel.push(this.questionPanelObject);
    } else{
      this.examResponseObject.questionPanel = [this.questionPanelObject];
    }
    this.examResponseObject.examMeta= this.examMetaObject;
    // renderQuestion
    this.currentQuestion = this.practiceService.renderQuestion();
  }
  saveQuestionResponse(){
    let currentQuestionStateInPanel = this.questionPanelObj[this.currentQuestionIndex];
    currentQuestionStateInPanel.isAnswered = true;
  }
  clearResponse(){
    let currentQuestionStateInPanel =  this.questionPanelObj[this.currentQuestionIndex];
    currentQuestionStateInPanel.isAnswered = false;
  }
  markQuestionForReview(){
    let refCurrentQuestion =  this.questionPanelObj.questionPanel[this.currentQuestionIndex];
    refCurrentQuestion.isMFR = true;
    this.practiceService.updateQuestionPanel(this.questionPanelObj)
  }

  isQuestionMFR(questionIndex){
    let refQues = this.questionPanelObj.questionPanel[questionIndex];
    return refQues.isMFR;
  }

  isQuestionAnswered(questionIndex){
    let refQues = this.questionPanelObj.questionPanel[questionIndex];
    return refQues.isAnswered;
  }
  isQuestionVisited(questionIndex){
    let refQues = this.questionPanelObj.questionPanel[questionIndex];
    return refQues.isVisited;
  }
  onExamTimeComplete(){
    console.log("on Exam Complete Status !!");
  }
  calcTimeTakenPerQuestion(){
    let timeTaken = 0;
    return ""+timeTaken;
  }
  calcElapsedTimeOfExam(){
    let timeElapsed = 0;
    return ""+timeElapsed;
  }
}