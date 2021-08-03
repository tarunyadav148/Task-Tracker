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

  loginwithgithub: string = 'https://firebasestorage.googleapis.com/v0/b/task-traker-4f454.appspot.com/o/loginwithgithub.jpg?alt=media&token=b77902c0-b39c-4e99-ae14-c535290ae990';
  constructor(public auth: AngularFireAuth,private DatabaseService:DatabaseServiceService) {}

  ngOnInit(): void {
    this.auth.user.subscribe(user =>{
      this.DatabaseService.setUserUid(user?.uid);
    })
  }

  loginWithGoogle() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(res =>{
      this.DatabaseService.setUserUid(res.user?.uid);
    }).catch((error)=>{
      alert(error.message);
    });
  }

  loginWithFB(){
    this.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(res=>{
      this.DatabaseService.setUserUid(res.user?.uid);
    }).catch((error)=>{
      alert(error.message);
    });
  }

  loginWithGitHub() {
    this.auth.signInWithPopup(new firebase.auth.GithubAuthProvider()).then(res =>{
      this.DatabaseService.setUserUid(res.user?.uid);
    }).catch((error)=>{
      alert(error.message);
    });
  }

  logout() {
     this.auth.signOut();
  }


}
