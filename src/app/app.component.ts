import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {ResponsiveService} from './responsive/responsive.service';
import {LayoutService} from './services/layout.service';
import {AuthService} from './services/auth.service';
import {isPlatformBrowser} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {animations} from './animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    animations
  ]
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
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
