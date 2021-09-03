import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentsComponent } from './students/students.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  {path: '', redirectTo: '/students', pathMatch: 'full'}, 
  {path: 'students', component: StudentsComponent},
  {path: 'update-student/:idnum', component: UpdateStudentComponent}, 
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
