import {Component} from '@angular/core';
import {AuthDialogComponent} from '../auth-dialog/auth-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.scss'],
})
export class AuthButtonComponent {

  constructor(private authentDialog: MatDialog) {
  }

  public authenticate(register: boolean) {
    this.authentDialog.open(AuthDialogComponent, {data: register, panelClass: 'mobile-modale'});
  }
}
