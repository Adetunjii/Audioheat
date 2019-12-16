import { Component, OnInit, Input } from '@angular/core';
import { ITrack } from '../music/track.model';
import { CartService } from '../shared/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() track: ITrack;
  isDisabled = false;

  constructor(private route: ActivatedRoute, public cartService: CartService) { }

  sendToCart(id, name, artist, downloadUrl) {
    this.cartService.getSong(id, name, artist, downloadUrl);
  };


  ngOnInit() {

  }


}