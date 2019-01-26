import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';
import {ResponsiveService} from './layout/responsive.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('sidenav') private sidenav: MatSidenav;

  constructor(public responsiveService: ResponsiveService) {
  }

  toggleSidenav(open: boolean) {
    if (!this.responsiveService.isNormalScreen()) {
      this.sidenav.toggle(open).then();
    }
  }

  public sidenavMode(): string {
    return this.responsiveService.isNormalScreen() ? 'side' : 'over';
  }

  public sidenavOpened(): boolean {
    return this.responsiveService.isNormalScreen();
  }

  public sidenavPosition(): string {
    return this.responsiveService.isNormalScreen() ? 'start' : 'end';
  }
}
