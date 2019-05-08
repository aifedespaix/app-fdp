import {Pipe} from '@angular/core';
import {UrlUnsecurePipe} from '../../connection/urlUnsecure.pipe';
import {DomSanitizer} from '@angular/platform-browser';
import {Video} from '../video';
@Pipe({
  name: 'youtubeMiniature',
  pure: false,
})
export class YoutubeMiniaturePipe extends UrlUnsecurePipe {

  private url: string;

  constructor(sanitizer: DomSanitizer) {
    super(sanitizer);
    this.url = '';
  }

  transform(youtube: Video): any {
    switch (youtube.type) {
      case Video.types.video:
        this.videoUrl(youtube);
        break;
      case Video.types.playlist:
        return 'assets/images/logos/fdp_logo_v2.png';
        break;
    }
    return super.transform(this.url);
  }

  private videoUrl(youtube) {
    this.url = `https://img.youtube.com/vi/${youtube.youtubeId}/0.jpg`;
  }

}
