import { MusicRouteActivatorService } from './music-route-activator.service';
import { SinglesDetailsComponent } from './singles/singles-details/singles-details.component';
import { AlbumsComponent } from './albums/albums.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SinglesComponent } from './singles/singles.component';

const routes: Routes = [
  {path: '', redirectTo: '/singles', pathMatch: 'full'},
  {path: 'singles', component: SinglesComponent},
  {path: 'singles/:id', component: SinglesDetailsComponent, canActivate: [MusicRouteActivatorService]},
  {path: 'albums', component: AlbumsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicRoutingModule { }
