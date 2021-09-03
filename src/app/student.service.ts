import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { } 

  public getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiServerUrl}/students`);
  }

  public getStudentById(idnum: number): Observable<Student> {
    return this.http.get<Student>(`${this.apiServerUrl}/student/${idnum}`);
  }

  public addStudents(stude: Student): Observable<Student> {
    return this.http.post<Student>(`${this.apiServerUrl}/create`, stude);
  }

  public updateStudents(stude: Student, idnum: number): Observable<Student> {
    return this.http.put<Student>(`${this.apiServerUrl}/update-student/${idnum}`, stude);
  }

  public deleteStudents(idnum: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/student/${idnum}`);
  }
  
}
