import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { DatabaseServiceService } from 'src/app/services/database-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginimgsrc: string = 'https://firebasestorage.googleapis.com/v0/b/task-traker-4f454.appspot.com/o/loginwithgoogle1.png?alt=media&token=c54c3f66-e902-4a41-b02f-aec3ffe452bf';

  constructor(public auth: AngularFireAuth,private DatabaseService:DatabaseServiceService) { }

  ngOnInit(): void {
  }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(res =>{
      this.DatabaseService.setUserUid(res.user?.uid);
    });
  }
  logout() {
     this.auth.signOut();
  }


}
