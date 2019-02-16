import {Component, OnInit} from '@angular/core';
import {AuthDialogComponent} from '../auth-dialog/auth-dialog.component';
import {MatDialog, MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.scss'],
})
export class AuthButtonComponent implements OnInit {

  constructor(private authentDialog: MatDialog) {
  }

  ngOnInit() {
  }

  public authent(register: boolean) {
    this.authentDialog.open(AuthDialogComponent, {data: register, panelClass: 'mobile-modale'});
  }
}
