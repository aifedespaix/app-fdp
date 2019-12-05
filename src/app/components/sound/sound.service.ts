import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {ResourceType} from '../../model/_generated/graphql.schema';

@Injectable({
  providedIn: 'root',
})
export class SoundService {
  public sound: ResourceType;
  public isPlaying: boolean;
  private readonly _audioContext: AudioContext;
  private readonly _audioHTML: HTMLAudioElement;

  constructor(
    @Inject(PLATFORM_ID) private platformId,
  ) {
    this._title = '';
    this.isPlaying = false;
    this._audioContext = new AudioContext();

    const speed = parseInt(localStorage.getItem('service_sound-speed'), 10);
    this._speed = speed ? speed : 100;

    const volume = parseInt(localStorage.getItem('service_sound-volume'), 10);
    this._volume = volume ? volume : 100;

    if (isPlatformBrowser(this.platformId)) {
      this._audioHTML = new Audio();
      this._audioHTML.addEventListener('ended', () => {
        this.verifyIfPlaying();
      });
    } else {
      this._audioHTML = null;
    }
  }

  private _title: string;

  get title(): string {
    return this._title;
  }

  private _speed: number;

  get speed(): number {
    return this._speed;
  }

  set speed(value) {
    this._speed = value;
    localStorage.setItem('service_sound-speed', value.toString());
    this.updateSpeed();
  }

  private _volume: number;

  get volume(): number {
    return this._volume;
  }

  set volume(value) {
    this._volume = value;
    localStorage.setItem('service_sound-volume', value.toString());
    this.updateVolume();
  }

  get url(): string {
    return this.sound ? this.sound.url : null;
  }

  get audioContext(): AudioContext {
    return this._audioContext;
  }

  public load(sound: ResourceType, title: string) {
    if (!this._audioHTML) {
      return false;
    }
    this._title = title;
    this.sound = sound;

    if (this._audioHTML.src !== this.sound.url) {
      this._audioHTML.src = this.sound.url;
    }
    this._audioHTML.load();

    this.updateSpeed();
    this.updateVolume();

    return true;
  }

  public play() {
    if (!this._audioHTML) {
      return false;
    }
    if (this.isPlaying) {
      this.stop();
    }
    this._audioHTML.play().then(() => {
      this.verifyIfPlaying();
    });
  }

  public stop() {
    if (!this._audioHTML) {
      return false;
    }
    this._audioHTML.pause();
    this.verifyIfPlaying();
  }

  public reset() {
    if (!this._audioHTML) {
      return false;
    }
    this._audioHTML.currentTime = 0;
  }

  public verifyIfPlaying() {
    this.isPlaying = this._audioHTML
      && this._audioHTML.duration > 0
      && !this._audioHTML.paused
      && !this._audioHTML.ended;
  }

  private updateVolume() {
    this._audioHTML.volume = this._volume / 100;
  }

  private updateSpeed() {
    this._audioHTML.playbackRate = this._speed / 100;
  }
}