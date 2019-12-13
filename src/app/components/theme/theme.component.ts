import {ChangeDetectionStrategy, Component, Inject, OnInit, PLATFORM_ID, ViewEncapsulation} from '@angular/core';
import {OverlayContainer} from '@angular/cdk/overlay';
import {isPlatformBrowser} from '@angular/common';
import {ITheme} from './theme.interface';
import {Theme} from './theme.enum';
import {LocalstorageService} from '../../services/localstorage/localstorage.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ThemeComponent implements OnInit {

  theme: ITheme;
  themes: ITheme[] = [
    {
      name: Theme.LIGHT,
      icon: 'wb_sunny',
      description: 'Thème clair',
    },
    {
      name: Theme.DARK,
      icon: 'nights_stay',
      description: 'Thème sombre',
    },
  ];

  constructor(
    private readonly overlay: OverlayContainer,
    private readonly localstorageService: LocalstorageService,
    @Inject(PLATFORM_ID) private readonly platformId: object,
  ) {
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setTheme(this.localstorageService.theme);
    }
  }

  public setTheme(name: string) {
    if (name === Theme.DARK) {
      this.setDarkTheme();
    } else {
      this.setLightTheme();
    }
  }

  private setLightTheme() {
    this.removeTheme(Theme.DARK);
    this.installTheme(Theme.LIGHT);
  }

  private removeTheme(name: string) {
    this.overlay.getContainerElement().classList.remove(name);
    document.body.classList.remove(name);
  }


  private setDarkTheme() {
    this.removeTheme(Theme.LIGHT);
    this.installTheme(Theme.DARK);
  }

  private installTheme(theme: Theme) {
    this.overlay.getContainerElement().classList.add(theme);
    document.body.classList.add(theme);
    this.localstorageService.theme = theme;
  }
}
