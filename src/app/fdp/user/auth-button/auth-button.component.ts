import {Component} from '@angular/core';
import {AuthDialogComponent} from '../auth-dialog/auth-dialog.component';
import {MatDialog} from '@angular/material';
import {UserService} from '../user.service';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.scss'],
})
export class AuthButtonComponent {

  constructor(
    private authentDialog: MatDialog,
    private readonly userService: UserService,
  ) {
  }

  public authenticate(register: boolean) {
    this.authentDialog.open(AuthDialogComponent, {data: register, panelClass: 'mobile-modale'});
  }

  public isUserLoged() {
    return this.userService.isLogged;
  }

  public disconnect() {
    return this.userService.logout();
  }

  public userProfilPictureSrc() {
    return `url(assets/images/logos/fdp_logo_v2.png)`;
  }

}
