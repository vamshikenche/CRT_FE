import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { PracticeService } from './services/practice.service';
import { PracticeSectionComponent } from './practice/practice-section/practice-section.component';
import { QuestionTypeComponent } from './practice/question-type/question-type.component';
import { QuestionMcqComponent } from './practice/question-type/question-mcq/question-mcq.component';
import { QuestionOptionsComponent } from './practice/question-type/question-options/question-options.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SafeHtmlPipe } from './safe-html.pipe';
import { QuestionDiBargraphComponent } from './practice/question-type/question-di-bargraph/question-di-bargraph.component';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionPanelComponent } from './practice/question-panel/question-panel.component';
import { MaterialModule } from './material/material.module';
import { TimerComponent } from './practice/timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectListComponent,
    PracticeSectionComponent,
    QuestionTypeComponent,
    QuestionMcqComponent,
    QuestionOptionsComponent,
    SafeHtmlPipe,
    QuestionDiBargraphComponent,
    QuestionPanelComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PracticeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
