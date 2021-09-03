import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  student: Student;


  constructor(private route: ActivatedRoute, private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params.idnum);
    this.studentService.getStudentById(this.route.snapshot.params.idnum).subscribe(
      (response)=>{
        this.student = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

  public onUpdateStudent(): void {
    this.studentService.updateStudents(this.student, this.route.snapshot.params.idnum).subscribe(
      (response: Student) => {
        console.log(response);
        this.goToStudentList();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  
  goToStudentList() {
    this.router.navigate(['/students']);
  }

}
