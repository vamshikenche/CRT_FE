import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PracticeSectionComponent } from './practice/practice-section/practice-section.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path : 'home', component:SubjectListComponent},
  {path:'test', component:PracticeSectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
