import { Component, OnInit } from '@angular/core';
import { DatabaseServiceService } from 'src/app/services/database-service.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  
  taskList?: any[];

  constructor(private _DatabaseService:DatabaseServiceService) { }

  ngOnInit(): void {
    this._DatabaseService.getTaskList().subscribe(tasklist =>{
      this.taskList = tasklist;
    })
  }
  
}
