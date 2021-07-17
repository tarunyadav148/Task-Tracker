import { Component, OnInit } from '@angular/core';
import { faPlus ,faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  addrmBtn = faPlus;
  public showflag = false;
  title = 'Task-Tracker';

  constructor() { }

  ngOnInit(): void {
  }

  AddRemoveTask(){
    if(this.addrmBtn ==faPlus){
      this.addrmBtn = faTimes;
      this.showflag = true;
    }
    else{
      this.addrmBtn = faPlus;
      this.showflag = false;
    }
  }

}
