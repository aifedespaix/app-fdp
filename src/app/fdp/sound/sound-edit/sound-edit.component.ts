import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {File} from '../../../graphql.schema';
import {OnInit} from '@angular/core/src/metadata/lifecycle_hooks';
import {CdkDragMove} from '@angular/cdk/drag-drop';


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
  @ViewChild('wave') private readonly wave: ElementRef<HTMLCanvasElement>;
  @ViewChild('timeline') private readonly timeline: ElementRef<HTMLBaseElement>;
  private readonly _slice: { start: number, end: number };
  private readonly audioContext: AudioContext;

  private analyser: AnalyserNode;
  private waveContext: CanvasRenderingContext2D;

  public start: number;
  public end: number;

  public debug = [];

  constructor() {
    this.file = null;
    this._slice = {start: 2, end: 2.3};
  }

  ngOnInit(): void {
    // cosnt audioCtx = this.sound
    // // Load media from HTMLAudio
    // const mediaSource = this.audioContext.createMediaElementSource(this.audio.nativeElement);
    // // Link source to context
    // mediaSource.connect(audioCtx.destination);
    // /**
    //  * Todo config server to prevent this shit
    //  * https://stackoverflow.com/questions/31308679/mediaelementaudiosource-outputs-zeros-due-to-cors-access-restrictions-local-mp3
    //  */
    // this.audio.nativeElement.crossOrigin = 'anonymous';

    /* 2) Prepare analyser */
    // New analyser
    // this.analyser = audioCtx.createAnalyser();
    // // Link source to analyser
    // mediaSource.connect(this.analyser);
    //
    // const WAVE_WIDTH = 100;
    // const WAVE_HEIGHT = 100;
    //
    // this.waveContext = this.wave.nativeElement.getContext('2d');
    // this.waveContext.clearRect(0, 0, WAVE_WIDTH, WAVE_HEIGHT);
    //
    // this.dessiner();
    // // const dessin = requestAnimationFrame(dessiner);
    //
    // const dessin = requestAnimationFrame((a) => {
    // });
    // this.audio.nativeElement.play();
  }

  dessiner() {
    const WAVE_WIDTH = 100;
    const WAVE_HEIGHT = 100;

    // const dessin = requestAnimationFrame(this.dessiner);
    this.analyser.fftSize = 2048;
    const tailleMemoireTampon = this.analyser.frequencyBinCount;
    const tableauDonnees = new Uint8Array(tailleMemoireTampon);
    this.analyser.getByteTimeDomainData(tableauDonnees);
    // console.log(tableauDonnees);
    // this.debug.push('aaaaaa');

    this.waveContext.fillStyle = 'rgb(0,170,221)';
    this.waveContext.fillRect(0, 0, WAVE_WIDTH, WAVE_HEIGHT);
    this.waveContext.lineWidth = 2;
    this.waveContext.strokeStyle = 'rgb(0, 0, 0)';
    this.waveContext.beginPath();
    // const largeurSegment = WAVE_WIDTH * 1.0 / tailleMemoireTampon;
    const largeurSegment = WAVE_WIDTH / tailleMemoireTampon;
    let x = 0;
    for (let i = 0; i < tailleMemoireTampon; i++) {
      const v = tableauDonnees[i] / 128.0;
      const y = v * WAVE_HEIGHT / 2;

      if (i === 0) {
        this.waveContext.moveTo(x, y);
      } else {
        this.waveContext.lineTo(x, y);
      }

      x += largeurSegment;
    }
    this.waveContext.lineTo(this.wave.nativeElement.width, this.wave.nativeElement.height / 2);
    this.waveContext.stroke();
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
    // console.log(this.audio.nativeElement);
    this.audio.nativeElement.currentTime = this.start;
    this.audio.nativeElement.play();
    // this.wavesurferInstance.play();
  }


  // get nativeAudio() {
  //   return this.audio.nativeElement;
  // }

}
