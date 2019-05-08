import {
  Component, EventEmitter, Output,
} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UrlService} from '../../../../commun/url.service';
import {Time, Video} from '../../../../commun/video/video';
import {File} from '../../../../commun/file/file';
import {FileService} from '../../../../commun/file/file.service';
import {MatSnackBar} from '@angular/material';
import {TimeService} from '../../../../commun/time/time.service';

@Component({
  selector: 'app-box-form-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss'],
})
export class YoutubeComponent {
  @Output() importDone = new EventEmitter<{ miniature: File, sound: File }>();
  public saving: boolean;
  public youtubeForm: FormGroup;
  public video: Video;
  public audioSaved: boolean;
  public imageSaved: boolean;

  public image: File;
  public audio: File;

  constructor(private urlService: UrlService,
              private fileService: FileService,
              private snackBar: MatSnackBar,
              private timeService: TimeService) {
    this.configForm();
    this.video = new Video();
    this.saving = false;

    this.audioSaved = false;
    this.imageSaved = false;

    this.audio = null;
    this.image = null;
  }

  private configForm() {
    this.youtubeForm = new FormGroup({
      url: new FormControl('', [Validators.required, Validators.minLength(11)]),
      start: new FormControl(this.timeService.secondToTime(0), [Validators.required]),
      end: new FormControl(this.timeService.secondToTime(20), [Validators.required]),
    });
    this.youtubeForm.valueChanges.subscribe(() => {
      this.updateTime();
      this.updateVideo();
    });
  }

  public send() {
    this.saving = true;
    this.fileService.youtubedl(this.video).subscribe(
      (file) => {
        this.audio = file;
        this.audioSaved = true;
        this.verifyFinish();
      },
      (err) => {
        this.snackBar.open(err.message, '', {duration: 1500});
        this.saving = false;
      });

    this.fileService.youtubeImage(this.video).subscribe(
      (file) => {
        this.image = file;
        this.imageSaved = true;
        this.verifyFinish();
      },
      (err) => {
        this.saving = false;
        this.snackBar.open(err.message, '', {duration: 1500});
      });
  }

  private updateVideo() {
    const id = this.urlService.getParameterByName('v', this.url.value);
    this.video = new Video().reader({
      youtubeId: id,
      autoplay: true,
      loop: true,
      time: new Time().reader({
        start: this.timeService.timeToSecond(this.start.value),
        end: this.timeService.timeToSecond(this.end.value),
      }),
    });
  }

  private updateTime() {
    if (this.timeService.timeToSecond(this.end.value) - this.timeService.timeToSecond(this.start.value) < 0) {
      let tmp = this.end.value;
      this.end = this.start.value;
      this.start = tmp;
    }
  }

  private verifyFinish() {
    if (this.audioSaved && this.imageSaved) {
      this.saving = false;
      this.importDone.emit({miniature: this.image, sound: this.audio});
    }
  }

  get url() {
    return this.youtubeForm.get('url');
  }

  get start() {
    return this.youtubeForm.get('start');
  }

  get end() {
    return this.youtubeForm.get('end');
  }

  set start(value) {
    this.youtubeForm.patchValue({start: value});
  }

  set end(value) {
    this.youtubeForm.patchValue({end: value});
  }

}
