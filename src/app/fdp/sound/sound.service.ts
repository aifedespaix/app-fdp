import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {Sound} from './sound';
import {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class SoundService {
  public sound: Sound;
  public isPlaying: boolean;

  private _title: String;
  private readonly _audioContext: AudioContext;
  private readonly _audioHTML: HTMLAudioElement;
  private _speed: number;
  private _volume: number;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.sound = null;
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
      // if (isPlatformServer(this.platformId)) {
      this._audioHTML = null;
      // }
    }
  }

  load(sound: Sound, title: String) {
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

  play() {
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

  stop() {
    if (!this._audioHTML) {
      return false;
    }
    this._audioHTML.pause();
    this.verifyIfPlaying();
  }

  reset() {
    if (!this._audioHTML) {
      return false;
    }
    this._audioHTML.currentTime = 0;
  }

  verifyIfPlaying() {
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

  get title(): String {
    return this._title;
  }

  set speed(value) {
    this._speed = value;
    localStorage.setItem('service_sound-speed', value.toString());
    this.updateSpeed();
  }

  get speed(): number {
    return this._speed;
  }

  get url(): string {
    return this.sound ? this.sound.url : null;
  }

  set volume(value) {
    this._volume = value;
    localStorage.setItem('service_sound-volume', value.toString());
    this.updateVolume();
  }

  get volume(): number {
    return this._volume;
  }

  get audioContext(): AudioContext {
    return this._audioContext;
  }
}
