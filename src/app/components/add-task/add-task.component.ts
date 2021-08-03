import { Component, OnInit, Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatabaseServiceService } from 'src/app/services/database-service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Input() showFlag?: boolean;

  DatabaseService: DatabaseServiceService;


  constructor(_DatabaseService:DatabaseServiceService) { 
    this.DatabaseService = _DatabaseService;
  }

  ngOnInit(): void {
  }

  onSubmit(TaskForm:NgForm)
  {

    if(TaskForm.valid == false){
      alert("Please enter all fields");
      return;
    }

    let taskForm = TaskForm.value;
    let date = new Date(taskForm['date']).toString().slice(0,16);
    const newTask = {
      task: taskForm['task'],
      date: date,
      reminder: false
    }
    this.DatabaseService.addTaskToDB(newTask);
    TaskForm.reset();
  }
}