import {Injectable} from '@angular/core';
import {ResponsiveService} from '../../responsive/responsive.service';
import {Logo} from './logo';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {

  private _isMenuVisible: boolean;
  private _isFooterVisible: boolean;
  public logoUri: Logo;

  get isMenuVisible(): boolean {
    return this._isMenuVisible;
  }

  get isFooterVisible(): boolean {
    return this._isFooterVisible;
  }

  constructor(
    private readonly responsiveService: ResponsiveService,
  ) {
    this._isMenuVisible = responsiveService.isLargeScreen;
    this._isFooterVisible = true;
    this.logoUri = Logo.Aifedespaix;
  }

  public toggleMenu() {
    this._isMenuVisible = !this._isMenuVisible;
  }

  public footerVisibility(visible: boolean) {
    this._isFooterVisible = visible;
  }


}
