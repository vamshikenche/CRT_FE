import { Component, OnInit, Input } from '@angular/core';
import {Subscription} from 'rxjs';
import {PracticeService} from '../../services/practice.service';
@Component({
  selector: 'app-question-type',
  templateUrl: './question-type.component.html',
  styleUrls: ['./question-type.component.scss']
})
export class QuestionTypeComponent implements OnInit {
  @Input() currentQuestionObj: any;
  currentQuestionInfo:any;
  currentQuestionSubscribe = new Subscription();
  constructor(private practiceService: PracticeService) { 
    
  }
  ngOnInit() {
    this.currentQuestionInfo = this.currentQuestionObj;
    this.currentQuestionSubscribe = this.practiceService.getCurrentQuestion().subscribe(questionDataObject =>{
      this.currentQuestionInfo = questionDataObject;
    }, error =>{

    });
  }
  ngOnChanges(changes:any){
    // this.currentQuestionInfo = changes.currentQuestionObj.currentValue;
  }
  ngOnDestroy(){
    this.currentQuestionSubscribe.unsubscribe();
  }
}
