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

  loginwithgoogle: string = 'https://firebasestorage.googleapis.com/v0/b/task-traker-4f454.appspot.com/o/loginwithgoogle1.png?alt=media&token=c54c3f66-e902-4a41-b02f-aec3ffe452bf';

  loginwithfb: string = 'https://firebasestorage.googleapis.com/v0/b/task-traker-4f454.appspot.com/o/loginwithfb.png?alt=media&token=09672335-238a-40da-8f80-416aec7ab6ad';

  loginwithtwitter: string = 'https://firebasestorage.googleapis.com/v0/b/task-traker-4f454.appspot.com/o/loginwithtwitter.png?alt=media&token=d194a63e-4ee1-47b2-b5fe-17cef435f432';

  constructor(public auth: AngularFireAuth,private DatabaseService:DatabaseServiceService) {}

  ngOnInit(): void {
    this.auth.user.subscribe(user =>{
      this.DatabaseService.setUserUid(user?.uid);
    })
  }

  loginWithGoogle() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(res =>{
      this.DatabaseService.setUserUid(res.user?.uid);
    });
  }

  loginWithFB(){
    this.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(res=>{
      this.DatabaseService.setUserUid(res.user?.uid);
    });
  }

  loginWithTwitter() {
    this.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider()).then(res =>{
      this.DatabaseService.setUserUid(res.user?.uid);
    });
  }

  logout() {
     this.auth.signOut();
  }


}
