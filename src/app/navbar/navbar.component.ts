import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {  auth  } from 'firebase';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent{

  constructor(public afAuth: AngularFireAuth) { }


  login(){
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
  }
  logOut(){
    this.afAuth.auth.signOut();
  }
}
