import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewSingleComponent } from './dashboard/new-single/new-single.component';
import { NewAlbumComponent } from './dashboard/new-album/new-album.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    DashboardComponent,
    NewSingleComponent,
    NewAlbumComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MDBBootstrapModule.forRoot()
  ]
})
export class AdminModule { }
