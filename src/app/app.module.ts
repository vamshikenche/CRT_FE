import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { PracticeService } from './services/practice.service';
import { PracticeSectionComponent } from './practice/practice-section/practice-section.component';
import { QuestionTypeComponent } from './practice/question-type/question-type.component';
import { QuestionMcqComponent } from './practice/question-type/question-mcq/question-mcq.component';
import { QuestionOptionsComponent } from './practice/question-type/question-options/question-options.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { SafeHtmlPipe } from './safe-html.pipe';
import { MatRadioModule } from '@angular/material/radio';
import { QuestionDiBargraphComponent } from './practice/question-type/question-di-bargraph/question-di-bargraph.component';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionPanelComponent } from './practice/question-panel/question-panel.component';
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
    QuestionPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PracticeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
