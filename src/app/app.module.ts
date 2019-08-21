import { MusicModule } from './music/music.module';
import { MusicService } from './music/music.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {
   NavbarComponent,
   HomepageComponent,
   MusicComponent
  } from './index';
import { UploadComponent } from './upload/upload.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { Page404Component } from './page404/page404.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { DataResolver } from './music/singles/singles-details/data.resolver';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './admin/auth.guard';
import { AuthService } from './admin/auth.service';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    MusicComponent,
    UploadComponent,
    LoginComponent,
    FooterComponent,
    Page404Component,
    AdminComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireStorageModule,
    AngularFireAuthModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    AuthService,
    AuthGuard,
    MusicService,
    DataResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
