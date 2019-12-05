import { Injectable } from '@angular/core';
import {YOUTUBE_PLAYLISTS} from './playlists.mock';

@Injectable()
export class PlaylistModelService {

  constructor() { }

  public youtubePlaylists() {
    return YOUTUBE_PLAYLISTS;
  }
}
