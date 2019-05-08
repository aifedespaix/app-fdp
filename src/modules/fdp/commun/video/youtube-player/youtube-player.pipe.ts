import {Pipe, PipeTransform} from '@angular/core';
import {UrlUnsecurePipe} from '../../connection/urlUnsecure.pipe';
import {DomSanitizer} from '@angular/platform-browser';
import {Video} from '../video';

@Pipe({
  name: 'youtube',
})
export class YoutubePlayerPipe extends UrlUnsecurePipe implements PipeTransform {

  private url: string;

  constructor(sanitizer: DomSanitizer) {
    super(sanitizer);
    this.url = '';
  }

  transform(youtube: Video): any {
    switch (youtube.type) {
      case Video.types.playlist:
        this.playlistUrl(youtube);
        break;
      case Video.types.video:
        this.videoUrl(youtube);
        break;
    }
    return super.transform(this.url);
  }

  private videoUrl(youtube: Video) {
    this.url = `https://www.youtube.com/embed/${youtube.youtubeId}`;
    this.url += '?ok';
    if (youtube.time) {
      this.url += `&start=${youtube.time.start}&end=${youtube.time.end}`;
    }
    this.url += `&autoplay=${youtube.autoplay ? 1 : 0}`;
    this.url += `&rel=${youtube.rel ? 1 : 0}`;
    this.url += `&loop=${youtube.loop ? 1 : 0}`;
    this.url += `&controls=${youtube.loop ? 0 : 1}`;
    this.url += `&origine=${window.location.hostname}`;
    this.url += `&modestbranding=1`;
    this.url += `&showinfo=0`;
    this.url += `&iv_load_policy=3`;
  }

  private playlistUrl(youtube) {
    this.url = `https://www.youtube.com/embed/videoseries?list=${youtube.youtubeId}`;
  }

}
