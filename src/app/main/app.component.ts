import { Component, OnInit } from '@angular/core';
// import { slider, transformer, fader, stepper } from './route-animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // animations: [
  //   fader, 
  //   // slider,
  //   // transformer, 
  //   // stepper
  // ]

})
export class AppComponent implements OnInit {

  // prepareRoute(outlet: RouterOutlet ) {
  //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animations']
  // }

  ngOnInit() {
     
  }
}
