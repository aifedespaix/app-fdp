import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {ThemeEnum} from './theme.enum';
import {Subject} from 'rxjs';
import {OverlayContainer} from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root',
})
export class ColorService implements OnDestroy {

  public readonly theme: Subject<ThemeEnum>;

  constructor(
    private readonly overlayContainer: OverlayContainer,
  ) {
    this.theme = new Subject<ThemeEnum>();
  }

  public setThemeDark() {
    this.setTheme(ThemeEnum.Dark);
  }

  public setThemeLight() {
    this.setTheme(ThemeEnum.Light);
  }

  public setTheme(theme: ThemeEnum) {
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.theme.next(theme);
  }

  ngOnDestroy(): void {
    this.theme.complete();
  }

}
