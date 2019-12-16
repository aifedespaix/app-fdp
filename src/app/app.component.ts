import {Component, HostBinding, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {ResponsiveService} from './responsive/responsive.service';
import {LayoutService} from './services/layout/layout.service';
import {AuthService} from './services/auth.service';
import {isPlatformBrowser} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {slideLeftAnimation} from './animations/slide-left.animation';
import {slideRightAnimation} from './animations/slide-right.animation';
import {trigger} from '@angular/animations';
import {slideTopAnimation} from './animations/slide-top.animation';
import {slideBottomAnimation} from './animations/slide-bottom.animation';
// import {getMainStateChangeExpr} from './animations/route-animation';

// console.log(getMainStateChangeExpr().bottom);
// console.log(getMainStateChangeExpr().top);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimations', [ // todo voir src/app/animations/route-animation.ts
      // tslint:disable-next-line:max-line-length
      slideRightAnimation('Shop => Glitch, Glitch => Box, Box => Music, Music => Blog, Blog => Index, Music => Index, Box => Blog, Blog => Index, Box => Index, Glitch => Music, Music => Blog, Blog => Index, Music => Index, Glitch => Blog, Blog => Index, Glitch => Index, Shop => Box, Box => Music, Music => Blog, Blog => Index, Music => Index, Box => Blog, Blog => Index, Box => Index, Shop => Music, Music => Blog, Blog => Index, Music => Index, Shop => Blog, Blog => Index, Shop => Index', '300ms'),
      // tslint:disable-next-line:max-line-length
      slideLeftAnimation('Index => Blog, Blog => Music, Music => Box, Box => Glitch, Glitch => Shop, Box => Shop, Music => Glitch, Glitch => Shop, Music => Shop, Blog => Box, Box => Glitch, Glitch => Shop, Box => Shop, Blog => Glitch, Glitch => Shop, Blog => Shop, Index => Music, Music => Box, Box => Glitch, Glitch => Shop, Box => Shop, Music => Glitch, Glitch => Shop, Music => Shop, Index => Box, Box => Glitch, Glitch => Shop, Box => Shop, Index => Glitch, Glitch => Shop, Index => Shop', '300ms'),
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

  @HostBinding('class.hideMenu') get hideMenu() {
    return !this.layoutService.isMenuVisible;
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
