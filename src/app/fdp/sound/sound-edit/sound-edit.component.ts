import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {File} from '../../../graphql.schema';
import {OnInit} from '@angular/core/src/metadata/lifecycle_hooks';
import {CdkDragMove} from '@angular/cdk/drag-drop';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-sound-edit',
  templateUrl: './sound-edit.component.html',
  styleUrls: ['./sound-edit.component.scss'],
})
export class SoundEditComponent implements OnInit {

  @Input() private readonly file: File;
  @ViewChild('slicerLeft') private readonly slicerLeft: ElementRef;
  @ViewChild('slicerRight') private readonly slicerRight: ElementRef;
  @ViewChild('visualizer') private readonly visualizer: ElementRef;
  private readonly _slice: { start: number, end: number };

  constructor(private readonly http: HttpClient) {
    this.file = null;
    this._slice = {start: 0, end: 0};
  }

  ngOnInit(): void {
    const sound = new Audio();
    sound.src = this.file.url;
    sound.volume = .05;
    sound.currentTime = this._slice.start;
    sound.currentTime = 1;
    sound.addEventListener('canplaythrough', () => {
      console.log(sound.currentTime);
      sound.play();
      this._slice.end = sound.duration;
    }, false);
    sound.load();
    this._slice.start = 0;
    console.log(sound.buffered);
    console.log(sound.buffered.length);
    console.log(sound.duration);
  }

  slicing(e: CdkDragMove) {
    const x1 = this.slicerLeft.nativeElement.getBoundingClientRect().x;
    const x2 = this.slicerRight.nativeElement.getBoundingClientRect().x;
    const xRef = this.visualizer.nativeElement.getBoundingClientRect().x;

    // const duration = this._player.buffer.duration;
    // const t1 = ((duration / xRef) * x1 - duration) * 2;
    // const t2 = ((duration / xRef) * x2 - duration) * 2;
    //
    // this._slice.start = t1 > t2 ? t2 : t1;
    // this._slice.end = t1 <= t2 ? t2 : t1;
  }

  play() {
    // this._player.start(0, 0, 4);
  }

  get slice(): { start: number; end: number } {
    return this._slice;
  }

}
