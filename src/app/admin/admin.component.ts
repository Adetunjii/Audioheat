import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  error: any;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe((auth) => {
      if (auth) {
        console.log(auth.displayName);
        this.router.navigateByUrl('/dashboard');
      }
    })
  }

  submit(form) {
    if (form.valid) {
      this.afAuth.auth.signInWithEmailAndPassword(form.email.value, form.password.value)
        .then(
          (success) => {
            console.log(success)
            this.router.navigate[('/dashboard')]
          }).catch(
            (err) => {
              this.error = err;
            }
          )
    }
  }


  ngOnInit() { }
}
