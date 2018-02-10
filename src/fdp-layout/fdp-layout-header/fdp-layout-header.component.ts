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
  public authBtnMessage: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private fdpUserAuthService: FdpUserAuthService) {
    this.authBtnMessage = AUTH_MODE.login;
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

  public logoutMode() {
    this.authBtnMessage = AUTH_MODE.logout;
  }

  public isLoged() {
    return this.fdpUserAuthService.isLoged;
  }
}
