import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {ResourceType} from '../../model/_generated/graphql.schema';
import {LocalstorageService} from '../localstorage/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class SoundService {
  public sound: ResourceType;
  public isPlaying: boolean;
  private readonly _audioContext: AudioContext;
  private readonly _audioHTML: HTMLAudioElement;

  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private readonly localstorageService: LocalstorageService,
  ) {
    this._title = '';
    this.isPlaying = false;

    this._speed = localstorageService.audioSpeed;
    this._volume = localstorageService.audioVolume;

    if (isPlatformBrowser(platformId)) {
      this._audioContext = new AudioContext();
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
    this.localstorageService.audioSpeed = value;
    this.updateSpeed();
  }

  private _volume: number;

  get volume(): number {
    return this._volume;
  }

  set volume(value) {
    this._volume = value;
    this.localstorageService.audioVolume = value;
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
