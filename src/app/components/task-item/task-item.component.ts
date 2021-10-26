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
  faTimes = faTimes;
  faCheckCircle = faCheckCircle;

  constructor(private _DatabaseService:DatabaseServiceService) { }

  ngOnInit(): void {
  }

  setStatus(id:string){
    if(this.Task.status == false){
      this.Task.status = true;
      this._DatabaseService.updateTaskInDB(this.Task);
    }
    else
      this.removeTask(id);
  }

  removeTask(id:string){
    this._DatabaseService.removeFromDB(id);
  }

  setReminder(){
    this.Task.reminder = !(this.Task.reminder)
    this._DatabaseService.updateTaskInDB(this.Task);
  }

}
