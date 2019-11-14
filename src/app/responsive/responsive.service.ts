import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
  ) {
    if (isPlatformBrowser(platformId)) {
      this._isLargeScreen = this.calcIsLargeScreen();
      this.nativeWindow.onresize = () => {
        this.verifyScreenRatioChange();
      };
    } else {
      this._isLargeScreen = false;
    }
  }

  private _isLargeScreen: boolean;

  /**
   * angular seems read this on every window.onresize
   * todo : if perf problem, do something lol
   */
  get isLargeScreen(): boolean {
    return this._isLargeScreen;
  }

  private calcIsLargeScreen() {
    return this.nativeWindow.innerWidth >= this.nativeWindow.innerHeight;
  }

  private verifyScreenRatioChange() {
    const isActuallyLargeScreen = this.calcIsLargeScreen();
    if (this._isLargeScreen !== isActuallyLargeScreen) {
      this._isLargeScreen = isActuallyLargeScreen;
    }
  }

  private get nativeWindow() {
    return window;
  }

}
