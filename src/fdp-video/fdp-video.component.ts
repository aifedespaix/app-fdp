import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {FdpVideoService} from './fdp-video.service';
import {FdpVideo} from './fdp-video';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  moduleId: module.id,
  selector: 'app-fdp-video',
  templateUrl: './fdp-video.component.html',
  styleUrls: ['./fdp-video.component.scss'],
})
export class FdpVideoComponent implements AfterViewInit {

  public videos: FdpVideo[];
  public video: FdpVideo;
  @ViewChild('videoView') videoView: ElementRef;

  constructor(public sanitizer: DomSanitizer) {
    FdpVideoService.getVideos().then((videos) => {
      this.videos = videos;
      this.video = this.videos[0]
    });
  }

  ngAfterViewInit() {
    this.calcVideoHeight();
  }

  /**
   * Autorise l'utilisation des iframes pour les liens récupérés youtube
   * @param {string} videoUrl
   * @returns {SafeResourceUrl}
   */
  public unsecureUrl(videoUrl: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }

  public loadVideo(id: number) {
    this.video = this.videos[id];
  }

  public calcVideoHeight() {
    this.videoView.nativeElement.height = this.videoView.nativeElement.offsetWidth / (16 / 9) + 'px';
  }

}
