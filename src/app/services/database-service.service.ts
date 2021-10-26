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
  useruid:any; 

  constructor(db:AngularFireDatabase) {
    this.db = db;
   }

  addTaskToDB(newTask:any){
    let key = this.db.database.ref('/users/'+this.useruid+'/').push(newTask).key;
    this.db.database.ref('/users/'+this.useruid+'/'+key).update({id:key});
  }

  getTaskList(){
    return this.db.list('/users/'+this.useruid+'/').valueChanges();
  }

  removeFromDB(id:string){
    this.db.database.ref('/users/'+this.useruid+'/'+id).remove().then(()=>{
      // alert("Task Completed Succesfully");
    })
  }

  updateTaskInDB(Task:any){
    this.db.database.ref('/users/'+this.useruid+'/'+Task.id).update(Task);
  }

  setUserUid(uid:any){
    this.useruid = uid;
    this.db.database.ref('/users/'+this.useruid).child('uid');
  }

}
