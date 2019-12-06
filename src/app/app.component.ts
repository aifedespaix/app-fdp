import {Component, Inject, InjectionToken, OnInit, PLATFORM_ID} from '@angular/core';
import {ResponsiveService} from './responsive/responsive.service';
import {LayoutService} from './services/layout.service';
import {AuthService} from './services/auth.service';
import {isPlatformBrowser} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {routesTrigger} from './animations/route';

export const ROUTES_TRIGGER = new InjectionToken<any>('Routes Trigger');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      provide: ROUTES_TRIGGER,
      useValue: routesTrigger,
    },
  ],
  animations: [ROUTES_TRIGGER],
})
export class AppComponent implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: object,
    public readonly authService: AuthService,
    public readonly layoutService: LayoutService,
    public readonly responsiveService: ResponsiveService,
  ) {
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.authService.loadProfile();
    }
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
