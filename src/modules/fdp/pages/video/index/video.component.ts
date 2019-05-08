import {Component} from '@angular/core';
import {VideoService} from './video.service';
import {Video} from '../../../commun/video/video';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  templateUrl: './video.component.html',
})
export class PageVideoComponent {
  public videos: Video[];

  constructor(public videoService: VideoService,
              private title: Title,
              private meta: Meta) {
    this.title.setTitle('Vidéos - aifedespaix');
    this.meta.updateTag({name: 'description', content: `Les vidéos des aifedespaix, y'en a plein, c'est drôle, c'est cool, c'est fun. Le vrai style Bro'`});
    this.meta.updateTag({name: 'keywords', content: `vidéos, jouer, fun, jeux vidéo, humour, troll`});
    this.videos = [];
    this.loadVideos();
  }

  protected loadVideos() {
    this.videoService.getVideos().then(videos => {
      this.videos = videos;
    });
  }
}
