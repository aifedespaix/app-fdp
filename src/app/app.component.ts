import {Component, OnInit, ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {ResponsiveService} from './layout/responsive.service';
import {Router} from '@angular/router';
import {UserService} from './fdp/user/user.service';
import {HeadService} from './layout/head/head.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav', { static: true }) private sidenav: MatSidenav;

  constructor(
    public responsiveService: ResponsiveService,
    private router: Router,
    private userService: UserService,
    private readonly headService: HeadService,
  ) {
  }

  ngOnInit(): void {
    this.headService.title = 'Accueil';
    this.headService.description = 'aifedespaix, site communautaire de partage de fichiers multimédia';
    this.headService.keywords = 'aifedespaix, fun, geek, soundbox, memes, music, audio';

    this.userService.authenticate();

    this.router.events.subscribe(() => {
      if (this.responsiveService.isMobileScreen) {
        this.toggleSidenav(false);
      }
    });

    this.responsiveService.switchLayout.subscribe(() => {
      if (!this.responsiveService.isMobileScreen) {
        this.toggleSidenav(true);
      }
    });

    this.initSidenav();
  }

  public toggleSidenav(open: boolean) {
    if (this.responsiveService.isMobileScreen || open) {
      this.sidenav.toggle(open).then();
    }
  }

  public sidenavMode(): string {
    return this.responsiveService.isMobileScreen ? 'over' : 'side';
  }

  public sidenavPosition(): string {
    return this.responsiveService.isMobileScreen ? 'end' : 'start';
  }

  private initSidenav() {
    this.toggleSidenav(!this.responsiveService.isMobileScreen);
  }
}
