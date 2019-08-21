import { Injectable, OnInit } from '@angular/core';
import { ITrack } from './track.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

export interface Isong{
  song_name: string;
  artist: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class MusicService implements OnInit {

  songDoc: AngularFirestoreDocument<ITrack>;
  song: Observable<Isong>
  
  constructor(private afs: AngularFirestore) {}

  getSongs() {
    return this.afs.collection('Songs').snapshotChanges()
  }

  getSong(id: string) {
    return this.afs.collection<any>('Songs', ref => ref.where('song_name', '==', id)).valueChanges();
  }


  ngOnInit() {
  }

 
}
