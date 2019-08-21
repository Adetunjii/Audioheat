import { CardComponent } from './../card/card.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MusicService } from './music.service';
import { AlbumsComponent } from './albums/albums.component';
import { SinglesComponent } from './singles/singles.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicRoutingModule } from './music-routing.module';
import { SinglesDetailsComponent } from './singles/singles-details/singles-details.component';
import { MusicRouteActivatorService } from './music-route-activator.service'

@NgModule({
  declarations: [
    SinglesComponent,
    AlbumsComponent,
    SinglesDetailsComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MusicRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    MusicService,
    MusicRouteActivatorService
  ]
})
export class MusicModule { }
