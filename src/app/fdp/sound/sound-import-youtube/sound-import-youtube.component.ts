import {Component, OnDestroy, OnInit} from '@angular/core';
import {YoutubeService} from '../../youtube/youtube.service';
import {FormControl} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-sound-import-youtube',
  templateUrl: './sound-import-youtube.component.html',
  styleUrls: ['./sound-import-youtube.component.scss'],
})
export class SoundImportYoutubeComponent implements OnInit, OnDestroy {

  public url: FormControl;
  public youtube: string;
  public isIdValid: boolean;
  private valueChange$: Subscription;

  constructor(private readonly youtubeService: YoutubeService) {
    this.url = new FormControl('https://www.youtube.com/watch?v=00dQC2yCIJA');
    this.isIdValid = false;
    this.verifyUrl();
  }

  ngOnInit() {
    this.valueChange$ = this.url.valueChanges.subscribe(() => {
      this.verifyUrl();
    });
  }

  private verifyUrl() {
    try {
      this.youtube = this.youtubeService.urlToId(this.url.value);
      this.youtubeService.getVideosForChanel('UCJEvbpuqzgyLUsygejoCyEw', 10).subscribe((a) => {
        console.log(a);
        this.isIdValid = true;
      }, () => {
        this.isIdValid = false;
      });
    } catch (e) {
      this.isIdValid = false;
    }
  }

  ngOnDestroy(): void {
    this.valueChange$.unsubscribe();
  }

}
