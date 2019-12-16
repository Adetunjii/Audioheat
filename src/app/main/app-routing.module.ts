import { LoginComponent } from '../login/login.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { Page404Component } from '../page404/page404.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { CartComponent } from '../cart/cart.component';
import { SearchComponent } from '../search/search.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'music', loadChildren: () => import('../music/music.module').then(m => m.MusicModule) },
  { path: 'cart', component: CartComponent },
  { path: 'search', component: SearchComponent },
  { path: 'administrator', loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule) },
  { path: 'login', component: LoginComponent },
  { path: '**', component: Page404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
