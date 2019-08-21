import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name: string = "";
  constructor(public router: Router) { }

  cancel(){
    this.router.navigate([''])
  }

  ngOnInit() {
  }

}
