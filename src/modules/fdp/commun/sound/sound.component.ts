import {Component} from '@angular/core';
import {SoundService} from './sound.service';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-sound',
  templateUrl: './sound.component.html',
  styleUrls: ['./sound.component.scss'],
})
export class SoundComponent {

  public soundModel: {volume: number, speed: number};
  private lastVolumeLevel;

  constructor(private soundService: SoundService, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.lastVolumeLevel = this.soundService.volume;
    this.soundModel = {volume: this.soundService.volume, speed: soundService.speed};
    // this.visualizer();

    this.matIconRegistry.addSvgIcon(`turtle`, this.domSanitizer.bypassSecurityTrustResourceUrl(`../../../assets/icons/turtle.svg`));
    this.matIconRegistry.addSvgIcon(`rabbit`, this.domSanitizer.bypassSecurityTrustResourceUrl(`../../../assets/icons/rabbit.svg`));
    this.matIconRegistry.addSvgIcon(`walk`, this.domSanitizer.bypassSecurityTrustResourceUrl(`../../../assets/icons/walk.svg`));
  }

  public soundExists() {
    return this.soundService.sound !== null;
  }

  public play() {
    this.soundService.play();
  }

  public pause() {
    this.soundService.stop();
  }

  public isPlaying() {
    return this.soundService.isPlaying;
  }

  public stop() {
    this.soundService.stop();
    this.soundService.reset();
  }

  public title() {
    return this.soundService.title;
  }

  public visualizer() {
    const context = new AudioContext();
    // const src = context.createMediaElementSource(this.soundService.audioHTML);
    const analyser = context.createAnalyser();

    const canvas = document.getElementById('visualizer') as HTMLCanvasElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');

    // src.connect(analyser);
    analyser.connect(context.destination);

    analyser.fftSize = 256;

    const bufferLength = analyser.frequencyBinCount;

    const dataArray = new Uint8Array(bufferLength);

    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;

    const barWidth = (WIDTH / bufferLength) * 2.5;
    let barHeight;
    let x = 0;

    function renderFrame() {
      requestAnimationFrame(renderFrame);
      x = 0;
      analyser.getByteFrequencyData(dataArray);

      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, WIDTH, HEIGHT);

      for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];

        const r = barHeight + (25 * (i / bufferLength));
        const g = 250 * (i / bufferLength);
        const b = 50;

        ctx.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

        x += barWidth + 1;
      }
    }

    // audio.play();
    renderFrame();
  }

  updateVolume() {
    this.soundService.volume = this.soundModel.volume;
  }

  volumeIcone() {
    if (this.soundModel.volume === 0) {
      return 'volume_mute';
    }
    if (this.soundModel.volume < 50) {
      return 'volume_down';
    }
    return 'volume_up';
  }

  speedIcone() {
    if (this.soundModel.speed < 100) {
      return 'turtle';
    }
    if (this.soundModel.speed > 100) {
      return 'rabbit';
    }
    return 'walk';
  }

  updateSpeed() {
    this.soundService.speed = this.soundModel.speed;
  }

  muteUnmute() {
    const actualVolume = this.soundService.volume;

    if (actualVolume === 0) { // is muted
      this.soundModel.volume = this.lastVolumeLevel;
    } else {
      this.lastVolumeLevel = actualVolume;
      this.soundModel.volume = 0;
    }

    this.updateVolume();
  }

  get url() {
    return this.soundService.url;
  }
}
