import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AuthService} from '../../../../auth/auth.service';
import {AuthDialogComponent} from '../../../../auth/auth-dialog/auth-dialog.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {

  constructor(
    private readonly authentDialog: MatDialog,
    public readonly authService: AuthService,
  ) {
  }

  public get avatar() {
    return this.authService.user.avatar;
  }

  public authenticate(register: boolean) {
    this.authentDialog.open(AuthDialogComponent, {data: register});
  }

  public getBackgroundImage() {
    return `url('${this.avatar.images[this.avatar.images.length - 1].url})`;
  }

}
