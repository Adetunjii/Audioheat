import { Injectable, OnInit, OnChanges } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import { v4 as uuid } from 'uuid';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit {

  cart_song = [];
  details;
  isDisabled: boolean = false;
  cartLength: number;

  constructor(private afs: AngularFirestore, private toastr: ToastrService) { }
  getSong(id: string, name: string, artists: string, downloadUrl: string) {
    console.log(uuid())
    this.details = { id, name, artists, downloadUrl };
    if (!!this.cart_song.find(x => x.id == this.details.id) == false) {
      this.cartLength += 1;
      this.cart_song.push(this.details);
      this.toastr.success('Added to cart');
    };
  };

  displaySongs() {
    return this.cart_song
  }
  removeSong(name) {
    this.cartLength -= 1;
    console.log(this.cartLength)
    return this.cart_song = this.cart_song.filter(e => e.name != name);
  }
  ngOnInit() { }
}