import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import {MatCheckboxModule} from '@angular/material/checkbox';
import { PracticeService } from '../../../services/practice.service';
@Component({
  selector: 'app-question-options',
  templateUrl: './question-options.component.html',
  styleUrls: ['./question-options.component.scss']
})
export class QuestionOptionsComponent implements OnInit {
  @Input() options: any;
  @Output() optionSelect = new EventEmitter();
  selectedOption:any;

  // optionResponseState

  constructor(private practiceService: PracticeService) { 

  }

  ngOnInit() {
    this.selectedOption = {};
  }
  saveQuestionResponse(optionEvent){
    if(optionEvent.value){
      this.selectedOption = optionEvent.value;
      console.log(JSON.stringify(this.selectedOption));
      this.practiceService.setCurrentQuestionResponse(this.selectedOption);
    }
  }

  clearResponse(){
    this.selectedOption = {};
  }

}
