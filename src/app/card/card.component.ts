import { Component, OnInit, Input } from '@angular/core';
import { ITrack } from '../music/track.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() track: ITrack;
  constructor(public cartService: CartService) { }

  ngOnInit() {
  }

  sendToCart() {
    this.cartService.fetchSong();
  }
  

}
