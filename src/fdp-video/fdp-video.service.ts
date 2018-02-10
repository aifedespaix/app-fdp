import { Injectable } from '@angular/core';

import { FdpVideo } from './fdp-video';
import { VIDEOS } from './datas/mock-videos';

@Injectable()
export class FdpVideoService {

  static getVideos(): Promise<FdpVideo[]> {
    return Promise.resolve(VIDEOS);
  }

}
