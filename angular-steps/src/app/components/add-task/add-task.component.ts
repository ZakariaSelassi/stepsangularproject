import { Component, OnInit , Output} from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  text!: string;
  day!:string;
  reminder:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(): void{
    if(!this.text)
    {
      alert("please add task!")
    }

    const newTask = {
      text: this.text,
      day:this.day,
      reminder:this.reminder,
    }
    this.day =""
    this.reminder = false
    this.text = ""
  }
}
