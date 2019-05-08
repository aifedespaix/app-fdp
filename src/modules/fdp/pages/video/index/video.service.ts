import { Injectable } from '@angular/core';

import { VIDEOS } from '../videos.mocks';
import {Video} from '../../../commun/video/video';

@Injectable()
export class VideoService {

  public getVideos(): Promise<Video[]> {
    return Promise.resolve(VIDEOS);
  }

}
