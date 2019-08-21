import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router'
import { Injectable } from '@angular/core';
import { MusicService } from './music.service'

@Injectable({
  providedIn: 'root'
})
export class MusicRouteActivatorService implements CanActivate {
constructor(public musicService: MusicService, public router: Router){}

canActivate(route: ActivatedRouteSnapshot){
  const songExists = !!this.musicService.getSong(route.params['id']);

  if(!songExists){
    this.router.navigate(['/**'])
  }
  return songExists;
}

}
