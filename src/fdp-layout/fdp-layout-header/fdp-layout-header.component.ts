import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FdpUserAuthService} from '../../fdp-user/fdp-user-auth/fdp-user-auth.service';

const AUTH_MODE = {
  login: 'Connexion',
  logout: 'Deconnexion',
};

@Component({
  selector: 'app-fdp-header',
  templateUrl: './fdp-layout-header.component.html',
  styleUrls: ['./fdp-layout-header.component.scss'],
})
export class FdpHeaderComponent {

  @Output() toggleSlidenav = new EventEmitter<null>();
  @Input() isSlidenavActived: Boolean;
  public isAuthActive: boolean;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private fdpUserAuthService: FdpUserAuthService) {
  }

  public appendLogin() {
    this.isAuthActive = !this.isAuthActive;
  }

  public pressBtnSlidenav() {
    this.toggleSlidenav.emit();
  }

  public onFormExit() {
    this.isAuthActive = false;
  }

  public isLoged() {
    return this.fdpUserAuthService.isLoged;
  }

  public logout() {
    this.fdpUserAuthService.logout();
  }

  public logedUser() {
    return this.fdpUserAuthService.user;
  }
}
