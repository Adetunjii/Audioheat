import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicService } from '../../music.service';

export interface miniItrack {
  name: string;
  artists: string;
  imageUrl: string;
  description: string;
  length: string;
  downloadUrl: string;
};
@Component({
  selector: 'app-singles-details',
  templateUrl: './singles-details.component.html',
  styleUrls: ['./singles-details.component.scss']
})
export class SinglesDetailsComponent implements OnInit {

  song: miniItrack = {
    'name': '',
    'artists': '',
    'imageUrl': '',
    'description': '',
    'length': '',
    'downloadUrl': ''
  };
  constructor(private route: ActivatedRoute, private musicService: MusicService) { }
  fetchSong() {
    let id = this.route.snapshot.params['id'];
    this.musicService.getSong(id).subscribe(data => data.map(
      tracks => {
        console.log(tracks)
        this.song.name = tracks.song_name,
          this.song.artists = tracks.artist,
          this.song.imageUrl = tracks.imageUrl,
          this.song.description = tracks.description,
          this.song.length = tracks.length,
          this.song.downloadUrl = tracks.downloadUrl
      }
    ))
  }
  ngOnInit() {
    this.fetchSong()
  }
}