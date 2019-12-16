import { Component, OnInit, OnChanges } from '@angular/core';
import { CartService } from '../shared/cart.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import * as JSZip from 'jszip';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  headers = ['#', 'name', 'artist', 'actions'];

  cart = []
  constructor(private afs: AngularFirestore, private http: HttpClient, private cartService: CartService) {
    this.cart = this.cartService.displaySongs();
    console.log(this.cart);
  }

  removeSong(name) {
    this.cart = this.cartService.removeSong(name);
  }
  // var counter = 0;
  // var zipFileName = "Audioheat.zip"
  // for (var song of this.cart) {
  //   var urls: [] = song.downloadUrl;

  // }

  // urls.forEach((url) => {
  //   var fileName = song.name;

  //   JSZip.JSZipUtils.getBinaryContent(url, (err, data) => {
  //     if (err) {
  //       throw err;
  //     }
  //     zip.file(fileName, data, { binary: true });
  //     counter++;
  //     if (counter == urls.length) {
  //       zip.generateAsync({ type: 'blob' }).then((content) => saveAs(content, zipFileName))
  //     }
  //   })
  // })
}