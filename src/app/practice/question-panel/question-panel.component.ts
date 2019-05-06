import { Component, OnInit, Input } from '@angular/core';
import {QuestionPanelObjType} from '../../modals/modal-definitions';
@Component({
  selector: 'app-question-panel',
  templateUrl: './question-panel.component.html',
  styleUrls: ['./question-panel.component.scss']
})
export class QuestionPanelComponent implements OnInit {

  @Input() questionPanelInfo:any;
  questionPanelArr: QuestionPanelObjType;
  constructor() { 

  }
  ngOnInit() {
    this.questionPanelArr = this.questionPanelInfo.questionPanel;
    console.log(this.questionPanelInfo);
  }
}
