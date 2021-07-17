import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseServiceService {
  db: AngularFireDatabase;
  private _Database =  new Subject<any[]>(); 
  _Database$ = this._Database.asObservable(); 

  constructor(db:AngularFireDatabase) {
    this.db = db;
   }

  addTaskToDB(newTask:any){
    let key = this.db.database.ref('task-list').push(newTask).key;
    this.db.database.ref('/task-list/'+key).update({id:key});
  }

  getTaskList(){
    return this.db.list('/task-list').valueChanges();
  }

  removeFromDB(id:string){
    this.db.database.ref('/task-list/'+id).remove().then(()=>{
      alert("Task Completed Succesfully");
    })
  }

  updateReminderInDB(Task:any){
    this.db.database.ref('/task-list/'+Task.id).update(Task);
  }

}
