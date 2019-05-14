import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {File} from '../../../graphql.schema';
import {OnInit} from '@angular/core/src/metadata/lifecycle_hooks';
import {CdkDragMove} from '@angular/cdk/drag-drop';
import WaveSurfer from 'wavesurfer.js';
import WaveSurferCursor from 'wavesurfer.js/dist/plugin/wavesurfer.cursor';


@Component({
  selector: 'app-sound-edit',
  templateUrl: './sound-edit.component.html',
  styleUrls: ['./sound-edit.component.scss'],
})
export class SoundEditComponent implements OnInit {

  @Input() private readonly file: File;
  @ViewChild('slicerLeft') private readonly slicerLeft: ElementRef;
  @ViewChild('slicerRight') private readonly slicerRight: ElementRef;
  @ViewChild('audio') private readonly audio: ElementRef<HTMLAudioElement>;
  @ViewChild('wave') private readonly wave: ElementRef<HTMLBaseElement>;
  @ViewChild('timeline') private readonly timeline: ElementRef<HTMLBaseElement>;
  private readonly _slice: { start: number, end: number };
  private waveSurfer = WaveSurfer.create;
  private waveSurferCursor = WaveSurferCursor.create;
  private sound;

  public start: number;
  public end: number;

  constructor() {
  console.log(WaveSurfer.cursor);
    this.file = null;
    this._slice = {start: 2, end: 2.3};
  }

  ngOnInit(): void {
    this.sound = this.waveSurfer({
      container: this.wave.nativeElement,
      waveColor: '#333',
      progressColor: '#fafafa',
      backend: 'MediaElement',
      plugins: [
        this.waveSurferCursor({
          showTime: true,
          opacity: 1,
          customShowTimeStyle: {
            'background-color': '#000',
            color: '#fff',
            padding: '2px',
            'font-size': '10px'
          }
        }),
      ]
    });

    this.audio.nativeElement.addEventListener('loadeddata', () => {
      this.sound.load(this.audio.nativeElement);
    });
    // this.sound.load(this.file.url);
  }

  slicing(e: CdkDragMove) {
    const x1 = this.slicerLeft.nativeElement.getBoundingClientRect().x;
    const x2 = this.slicerRight.nativeElement.getBoundingClientRect().x;
    // const xRef = this.editor.nativeElement.getBoundingClientRect().x;

    // const duration = this.sound.getDuration();
    // const t1 = ((duration / xRef) * x1 - duration) * 2;
    // const t2 = ((duration / xRef) * x2 - duration) * 2;
    //
    // this.start = t1 > t2 ? t2 : t1;
    // this.end = t1 < t2 ? t2 : t1;
  }

  play() {
    // this.sound.setCurrentTime(this.start);
    // console.log(this.start);
    this.sound.play();
  }


  // get nativeAudio() {
  //   return this.audio.nativeElement;
  // }

}
