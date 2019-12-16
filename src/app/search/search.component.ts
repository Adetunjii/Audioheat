import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music/music.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { SinglesComponent } from '../music/singles/singles.component';
import { SearchService } from '../shared/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(public searchService: SearchService) { }

  ngOnInit() {
  }

}
