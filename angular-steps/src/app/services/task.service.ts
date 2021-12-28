import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import {Task} from '../task'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  //api url 
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http:HttpClient) {

   }
  // crud operation call from api 
  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl)
  }
  deleteTasks(task: Task): Observable<Task[]>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task[]>(url)
  }
  updateTask(task:Task): Observable<Task[]> {
    const url = `${this.apiUrl}/${task.id}`
    return this.http.put<Task[]>(url, task, httpOptions)
  }
}