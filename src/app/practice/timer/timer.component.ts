import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  @Input() time:string;
  @Output() onComplete = new EventEmitter();
  constructor() { }
  minutes;
  seconds;
  ngOnInit() {
    // this.minutes = (this.time/60) < 10 ? "0" + this.minutes : this.minutes;
    // this.seconds = (this.time%60) < 10 ? "0" + this.seconds : this.seconds;
    this.calcTimer(this.time);
    this.startTimer();
  }
  ngAfterViewInit(){
  }
  ngOnChanges(changes:any){
  }
  calcTimer(refTimer){
    let mnts =  Math.floor(refTimer / 60);
    let sec = (refTimer % 60);
    this.minutes =  mnts < 10 ? "0"+mnts : mnts;
    this.seconds = sec < 10 ? "0"+sec : sec;
  }
  startTimer(){
    let timer:any = Number(this.time);
    let countDownTimer = setInterval( () => {
      this.calcTimer(timer);
      if (--timer < 0) {
        clearInterval(countDownTimer);
        this.onComplete.emit();
      }
    }, 1000);
  }
}
