import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';
import {ResponsiveService} from './layout/responsive.service';
import {Router} from '@angular/router';
import {UserService} from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') private sidenav: MatSidenav;

  constructor(public responsiveService: ResponsiveService, private router: Router, private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.authent();

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
