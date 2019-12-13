import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {LocalstorageItem} from './localstorage-item';
import {Theme} from '../../components/theme/theme.enum';
import {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {

  private readonly _token: LocalstorageItem<string>;
  private readonly _audioSpeed: LocalstorageItem<number>;
  private readonly _audioVolume: LocalstorageItem<number>;
  private readonly _theme: LocalstorageItem<Theme>;

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId,
  ) {
    const isBrowser = isPlatformBrowser(platformId);
    this._token = new LocalstorageItem<string>('token', '', isBrowser);
    this._audioSpeed = new LocalstorageItem<number>('audioSpeed', 100, isBrowser);
    this._audioVolume = new LocalstorageItem<number>('audioVolume', 100, isBrowser);
    this._theme = new LocalstorageItem<Theme>('theme', Theme.LIGHT, isBrowser);
  }

  get token(): string {
    return this._token.value;
  }

  set token(value: string) {
    this._token.value = value;
  }

  get audioSpeed(): number {
    return this._audioSpeed.value;
  }

  set audioSpeed(value: number) {
    this._audioSpeed.value = value;
  }

  get audioVolume(): number {
    return this._audioVolume.value;
  }

  set audioVolume(value: number) {
    this._audioVolume.value = value;
  }

  get theme(): Theme {
    return this._theme.value;
  }

  set theme(value: Theme) {
    this._theme.value = value;
  }

}
