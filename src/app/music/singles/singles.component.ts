import { MusicService } from './../music.service';
import { Component, OnInit } from '@angular/core';
import { ITrack } from '../track.model';
import { v4 as uuid } from 'uuid';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-singles',
  templateUrl: './singles.component.html',
  styleUrls: ['./singles.component.scss']
})
export class SinglesComponent implements OnInit {
  tracks: ITrack[];

  constructor(private route: ActivatedRoute, private musicService: MusicService) { }

  ngOnInit() {
    this.getTracks();
  }

  getTracks() {
    return this.musicService.getSongs()
      .subscribe(songs => this.tracks = songs.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as ITrack;
      }

      ));
  }

  sortByName() {
    return this.tracks.sort((a, b) => (a.song_name > b.song_name) ? 1 : -1);
  }
  sortByArtist() {
    return this.tracks.sort((a, b) => (a.artist > b.artist) ? 1 : -1);
  }
  sortByGenre() {
    return this.tracks.sort((a, b) => (a.genre > b.genre) ? 1 : -1);
  }
  sortByReleaseDateOlder() {
    return this.tracks.sort((a, b) => (a.date_of_release < b.date_of_release) ? 1 : -1)
  }
  sortByReleaseDateNewer() {
    return this.tracks.sort((a, b) => (a.date_of_release > b.date_of_release) ? 1 : -1);
  }



}
