import {  Injectable  } from '@angular/core';
import { Resolve } from '@angular/router';
import { MusicService } from '../../music.service';
@Injectable()
export class DataResolver implements Resolve<any> {
    constructor(private musicService: MusicService) {}

    resolve() {
        return this.musicService.getSongs();
    }
}