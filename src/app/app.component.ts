import {Component, HostBinding, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {ResponsiveService} from './responsive/responsive.service';
import {ColorService} from './color/color.service';
import {ThemeEnum} from './color/theme.enum';
import {LayoutService} from './layout/layout.service';
import {AuthService} from './auth/auth.service';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @HostBinding('class') class: ThemeEnum;

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: object,
    public readonly responsiveService: ResponsiveService,
    public readonly colorService: ColorService,
    public readonly layoutService: LayoutService,
    private readonly authService: AuthService,
  ) {
  }

  ngOnInit(): void {
    this.colorService.theme.subscribe((theme) => {
      this.class = theme;
    });
    this.colorService.setThemeLight();

    if (isPlatformBrowser(this.platformId)) {
      this.authService.loadProfile();
    }
  }

}
