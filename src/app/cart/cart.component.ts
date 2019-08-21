import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  headers = ['id', 'name', 'artist', 'actions']


  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  cart() {
    console.log(this.cartService.fetchSong())
  }  

}
