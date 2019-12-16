import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchResults: any;

  constructor(private afs: AngularFirestore, private router: Router) { }

  search(searchValue) {
    this.searchResults = this.afs.collection('Songs', ref => ref.orderBy('song_name')
      .startAt(searchValue.toLowerCase())
      .endAt(searchValue.toLowerCase() + "\uf8ff")).valueChanges()
  }
}
