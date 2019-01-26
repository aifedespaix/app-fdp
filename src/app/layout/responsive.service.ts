import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
// todo rename isNormalScreen en isMobileScreen
  public screenWidth: number;
  public minimumNormalWidth = 840;

  constructor(@Inject(PLATFORM_ID) private platformId) {
    if (isPlatformBrowser(platformId)) {
      this.screenWidth = window.innerWidth;
      window.onresize = () => {
        this.screenWidth = window.innerWidth;
      };
    } else {
      this.screenWidth = this.minimumNormalWidth;
    }
  }

  public isNormalScreen() {
    return this.screenWidth > this.minimumNormalWidth;
  }

}
