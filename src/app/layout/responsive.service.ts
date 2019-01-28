import {EventEmitter, Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {

  public minimumNormalWidth = 850;
  public switchLayout = new EventEmitter();

  public alreadyResized: boolean;
  public screenWidth: number;
  public isMobileScreen: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId) {
    this.alreadyResized = false;
    if (isPlatformBrowser(platformId)) {
      this.screenWidth = window.innerWidth;
      this.isMobileScreen = this.calcIsMobileScreen();
      window.onresize = () => {
        this.windowResized();
      };
    } else {
      this.screenWidth = this.minimumNormalWidth;
      this.isMobileScreen = false;
    }
  }

  private windowResized() {
    this.alreadyResized = true;
    this.screenWidth = window.innerWidth;

    const layoutAfterResize = this.calcIsMobileScreen();
    if (layoutAfterResize !== this.isMobileScreen) {
      this.isMobileScreen = layoutAfterResize;
      this.switchLayout.emit();
    }
  }

  private calcIsMobileScreen() {
    return !(this.screenWidth > this.minimumNormalWidth);
  }

}
