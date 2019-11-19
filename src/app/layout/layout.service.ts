import { Injectable } from '@angular/core';
import {ResponsiveService} from '../responsive/responsive.service';

@Injectable()
export class LayoutService {

  private _isMenuVisible: boolean;

  get isMenuVisible(): boolean {
    return this._isMenuVisible;
  }

  constructor(
    private readonly responsiveService: ResponsiveService,
  ) {
    this._isMenuVisible = responsiveService.isLargeScreen;
  }

  public toggleMenu() {
    this._isMenuVisible = !this._isMenuVisible;
  }

}
