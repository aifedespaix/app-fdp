import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    @Inject('Window') private readonly window: Window,
  ) {
    this._isLargeScreen = this.calcIsLargeScreen();

    if (isPlatformBrowser(platformId)) {
      this.window.onresize = () => {
        this.verifyScreenRatioChange();
      };
    }
  }

  private _isLargeScreen: boolean;

  /**
   * angular seems read this on every window.onresize
   * todo : change this comportment
   */
  get isLargeScreen(): boolean {
    return this._isLargeScreen;
  }

  private calcIsLargeScreen() {
    return this.window.innerWidth > this.window.innerHeight;
  }

  private verifyScreenRatioChange() {
    const isActuallyLargeScreen = this.calcIsLargeScreen();
    if (this._isLargeScreen !== isActuallyLargeScreen) {
      console.log('change');
      this._isLargeScreen = isActuallyLargeScreen;
    }
  }

}
