import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  public students: Student[];
  public idnum: number;
  

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.getStudents();
  }

  public getStudents(): void {
    this.studentService.getStudents().subscribe(
      (response: Student[]) => {
        this.students = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddStudent(addForm: NgForm): void {
    document.getElementById("close-button").click();
    this.studentService.addStudents(addForm.value).subscribe(
      (response: Student) => {
        console.log(response)
        this.getStudents();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }


  public onDeleteStudent(idnum: number): void {
    this.studentService.deleteStudents(idnum).subscribe(
      (response: void) => {
        console.log(response)
        this.getStudents();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchStudent(key: string): void {
    console.log(key);
    const results: Student[] = []; 
    for(const student of this.students) {
      if (student.fname.toLowerCase().indexOf(key.toLowerCase() ) !== 1 
      || student.lname.toLowerCase().indexOf(key.toLowerCase() ) !== 1
      || student.course.toLowerCase().indexOf(key.toLowerCase() ) !== 1
      || student.phoneNumber.toLowerCase().indexOf(key.toLowerCase() ) !== 1
      || student.regNumber.toLowerCase().indexOf(key.toLowerCase() ) !== 1)  {
        results.push(student);
      }
      this.students = results;
      if (results.length === 0 || !key) {
        this.getStudents();
      }
    }
  }



  // public onOpenModal(stude: Student, mode: string): void {
  //   const container = document.getElementById('main-container');
  //   const button = document.createElement('button');
  //   button.type = 'button';
  //   button.style.display = 'none';
  //   button.setAttribute('data-toggle', 'modal');
  //   if (mode === 'add') {
  //     button.setAttribute('data-target', '#addStudentModal');
  //   }
  //   if (mode === 'edit') {
  //     button.setAttribute('data-target', '#updateStudentModal');
  //   }
  //   if (mode === 'delete') {
  //     button.setAttribute('data-target', '#deleteStudentModal');
  //   }
  //   container.appendChild(button);
  //   button.click();
  // }
  
}
function idnum(students: Student, idnum: any) {
  throw new Error('Function not implemented.');
}

