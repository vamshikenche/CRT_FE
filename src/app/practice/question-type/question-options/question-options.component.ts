import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import {MatCheckboxModule} from '@angular/material/checkbox';
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


  constructor() { }

  ngOnInit() {
    this.selectedOption = {};
    console.log(this.options);
  }
  saveQuestionResponse(optionEvent){
    console.log(optionEvent);
    if(optionEvent.value){
      this.selectedOption = optionEvent.value;
    }

  }

  clearResponse(){
    this.selectedOption = {};
  }

}
