import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { CartService } from '../shared/cart.service';
import { SearchService } from '../shared/search.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  cart;
  searchValue = "";

  constructor(private searchService: SearchService, public cartService: CartService) {
  }

  search() {
    this.searchService.search(this.searchValue);
  }

  ngOnInit() {
  }
}

