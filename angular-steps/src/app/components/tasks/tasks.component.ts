import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service'
import {Task} from '../../task'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];
  constructor(private taskService: TaskService) {

   }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks
    })
  }

  deleteTask(task:Task) :void{
      this.taskService
      .deleteTasks(task)
      .subscribe(
        () => {
          this.tasks = this.tasks.filter(item => item.id !== task.id)
        })
  }
  toggleTask(task:Task):void {
    task.reminder = !task.reminder
    this.taskService.updateTask(task).subscribe((res) => {
      console.log(res)
    })
  }

}
