import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {ResponsiveService} from './responsive/responsive.service';
import {LayoutService} from './services/layout.service';
import {AuthService} from './services/auth.service';
import {isPlatformBrowser} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {slideLeftAnimation} from './animations/slide-left.animation';
import {slideRightAnimation} from './animations/slide-right.animation';
import {trigger} from '@angular/animations';
import {slideTopAnimation} from './animations/slide-top.animation';
import {slideBottomAnimation} from './animations/slide-bottom.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimations', [ // todo voir src/app/animations/route-animation.ts
      slideRightAnimation('Box => Music, Music => Blog, Blog => Index, Music => Index, Box => Blog, Blog => Index, Box => Index', '300ms'),
      slideLeftAnimation('Index => Blog, Blog => Music, Music => Box, Blog => Box, Index => Music, Music => Box, Index => Box', '300ms'),
      slideTopAnimation('* => OnTop, OnBottom => *', '300ms'),
      slideBottomAnimation('* => OnBottom, OnTop => *', '300ms'),
    ])],
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
