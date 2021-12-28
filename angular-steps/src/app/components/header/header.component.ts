import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs'
import {UiService} from '../../services/ui.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showAddTask:boolean = true;
  subscription!: Subscription;
  title: string = 'aangular-steps'

  constructor(private uiService:UiService) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value)
  }

  ngOnInit(): void {
  }
  toggleAddTask(): void{
    this.uiService.toggleAddTask()
  }

}
