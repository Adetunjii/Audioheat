import { Injectable } from '@angular/core';
import {auth} from 'firebase/app';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userId;
  constructor(private toastr: ToastrService, private af: AngularFireAuth, private router: Router) {
    this.af.authState.subscribe(user => {
      if (user) {this.userId = user.uid}})
  }

  login() {
    this.af.auth.signInWithPopup(new auth.GoogleAuthProvider())
    .then(
      response => {
        this.router.navigate(['dashboard']);
        this.toastr.success("Successfully logged in");
        console.log(this.userId);
      
    }
    )
  }
  
}
