import { Injectable, OnInit } from '@angular/core';
import { ITrack } from './track.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

export interface Isong {
  song_name: string;
  artist: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class MusicService implements OnInit {
  constructor(private afs: AngularFirestore) { }

  getSongs() {
    return this.afs.collection('Songs', ref => ref.orderBy('date_of_release')).snapshotChanges();
  }

  getSong(id: string) {
    return this.afs.collection<any>('Songs', ref => ref.where('id', '==', id)).valueChanges();
  }
  ngOnInit() { }
}
