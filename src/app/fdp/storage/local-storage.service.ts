import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {

  constructor(@Inject(PLATFORM_ID) private platformId) {
  }

  get token() {
    return isPlatformBrowser(this.platformId) ? localStorage.getItem('token') : null;
  }

  set token(token: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('token', token);
    }
  }

}
