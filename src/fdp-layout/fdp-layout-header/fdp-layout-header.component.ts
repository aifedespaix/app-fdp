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
  public isLoginActive: boolean;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private fdpUserAuthService: FdpUserAuthService) {
  }

  public appendLogin() {
    this.isLoginActive = !this.isLoginActive;
  }

  public pressBtnSlidenav() {
    this.toggleSlidenav.emit();
  }

  public onFormExit() {
    this.isLoginActive = false;
  }

  public isLoged() {
    return this.fdpUserAuthService.isLoged;
  }

  public logout() {
    this.fdpUserAuthService.logout();
  }

  public username() {
    return this.fdpUserAuthService.user.username;
  }
}
