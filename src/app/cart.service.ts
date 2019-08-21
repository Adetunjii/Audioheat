import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import { ITrack } from './music/track.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private afs: AngularFirestore, private route: ActivatedRoute) { }

  
  fetchSong() {
    let ID = this.route.snapshot.params['id']
    this.afs.collection('Songs').doc<ITrack>(ID);
  }

}
