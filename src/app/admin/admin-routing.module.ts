import { Routes, Router, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { NewSingleComponent } from './dashboard/new-single/new-single.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewAlbumComponent } from './dashboard/new-album/new-album.component';

const routes: Routes = [
    {
        path: 'dashboard', component: DashboardComponent, children: [
            { path: 'new-single', component: NewSingleComponent },
            { path: 'new-album', component: NewAlbumComponent }

        ]
    },

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminRoutingModule {

}