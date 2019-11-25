import { Injectable } from '@angular/core';
import {ResponsiveService} from '../responsive/responsive.service';

@Injectable()
export class LayoutService {

  private _isMenuVisible: boolean;
  private _isFooterVisible: boolean;

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
  }

  public toggleMenu() {
    this._isMenuVisible = !this._isMenuVisible;
  }

  public footerVisibility(visible: boolean) {
    this._isFooterVisible = visible;
  }

}
