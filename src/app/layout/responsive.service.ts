import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {

  public screenWidth: number;
  public minimumNormalWidth = 840;

  constructor() {
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
      this.screenWidth = window.innerWidth;
    };
  }

  public isNormalScreen() {
    return this.screenWidth > this.minimumNormalWidth;
  }

}
