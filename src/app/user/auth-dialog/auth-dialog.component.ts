import {Component, HostBinding, HostListener, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatTabGroup} from '@angular/material';

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss'],
})
export class AuthDialogComponent implements OnInit {
  @ViewChild('tabs') tabGroup: MatTabGroup;
  @HostBinding('class.mobile-modaleContent') mobile: boolean;

  constructor(
    private dialogRef: MatDialogRef<AuthDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public register: boolean,
  ) {
    dialogRef.disableClose = true;
    this.mobile = false;
  }

  @HostListener('window:keyup.esc') onKeyUp() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    if (this.register) {
      this.tabGroup.selectedIndex = 1;
    }
    this.mobile = true;
  }

  close() {
    this.dialogRef.close();
  }
}