import { MusicService } from './../music.service';
import { Component, OnInit } from '@angular/core';
import { ITrack } from '../track.model';
import { SourceMapGenerator } from '@angular/compiler/src/output/source_map';
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
      }));
  }




}
