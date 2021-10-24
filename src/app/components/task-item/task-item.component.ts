import { Component, OnInit ,Input} from '@angular/core';
import { faCheckCircle,faTimes} from '@fortawesome/free-solid-svg-icons';
import { DatabaseServiceService } from 'src/app/services/database-service.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() Task:any;
  icon = faCheckCircle;
  status = false;

  constructor(private _DatabaseService:DatabaseServiceService) { }

  ngOnInit(): void {
  }

  setStatus(id:string){
    this.status = !this.status;
    if(this.status)
      this.icon = faTimes;
    else
    this.removeTask(id);
  }

  removeTask(id:string){
    this._DatabaseService.removeFromDB(id);
  }

  setReminder(){
    this.Task.reminder = !(this.Task.reminder)
    this._DatabaseService.updateReminderInDB(this.Task);
  }

}
