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

  public isLoginActive: boolean;
  @Output() toggleSlidenav = new EventEmitter<null>();
  @Input() isSlidenavActived: Boolean;
  public authBtnMessage: string;
  public isLoged: boolean;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private fdpUserAuthService: FdpUserAuthService) {
    this.isLoged = this.fdpUserAuthService.isLoged;
    this.authBtnMessage = AUTH_MODE.login;
  }

  public appendLogin() {
    this.isLoginActive = !this.isLoginActive;
    console.log(this.isLoginActive);
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
}
