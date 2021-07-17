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

  constructor(public auth: AngularFireAuth,private DatabaseService:DatabaseServiceService) { }

  ngOnInit(): void {
  }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(res =>{
      console.log(res.user?.uid);
      this.DatabaseService.setUserUid(res.user?.uid);
    });
  }
  logout() {
     this.auth.signOut();
  }


}
