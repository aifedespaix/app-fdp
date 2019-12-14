import {Component, OnInit} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {SoundService} from '../../../services/sound/sound.service';

@Component({
  selector: 'app-sound-player',
  templateUrl: './sound-player.component.html',
  styleUrls: ['./sound-player.component.scss'],
})
export class SoundPlayerComponent implements OnInit {

  public soundModel: { volume: number, speed: number };
  private lastVolumeLevel;
  private readonly icons: string[];

  constructor(
    public readonly soundService: SoundService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    this.lastVolumeLevel = this.soundService.volume;
    this.soundModel = {volume: this.soundService.volume, speed: soundService.speed};
    this.icons = ['fast', 'normal', 'slow'];
  }

  get url() {
    return this.soundService.url;
  }

  ngOnInit(): void {
    this.registerIcons();
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
      return 'slow';
    }
    if (this.soundModel.speed > 100) {
      return 'fast';
    }
    return 'normal';
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

  private registerIcons() {
    this.icons.forEach((i) => {
      this.matIconRegistry.addSvgIcon(i, this.domSanitizer.bypassSecurityTrustResourceUrl(`../../../assets/icons/sound/${i}.svg`));
    });
  }

}
