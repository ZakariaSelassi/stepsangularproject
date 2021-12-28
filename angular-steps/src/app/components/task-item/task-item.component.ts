import { Component, OnInit, Input , Output, EventEmitter } from '@angular/core';
import { Task } from '../../task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task?: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Output() onToggleTask: EventEmitter<Task> = new EventEmitter();
  color:string = 'green';
  text: string = 'delete';
  constructor() { }

  ngOnInit(): void {
  console.log(this.task)
  }

  onDelete(task:Task) {

    /* let newArray = this.task?.filter(task => task.id !== id); */
    this.onDeleteTask.emit(task)
  }

  onToggle(task:Task):void{
    this.onToggleTask.emit(task)
  }
  
}
