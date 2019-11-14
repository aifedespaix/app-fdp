import {Component, HostBinding, HostListener, Inject, OnInit, ViewChild} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss'],
})
export class AuthDialogComponent implements OnInit {
  @ViewChild('tabs', { static: true }) tabGroup: MatTabGroup;
  @HostBinding('class.mobile-modaleContent') public readonly mobile = true;

  constructor(
    private dialogRef: MatDialogRef<AuthDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public register: boolean,
  ) {
    dialogRef.disableClose = true;
  }

  @HostListener('window:keyup.esc') onKeyUp() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    if (this.register) {
      this.tabGroup.selectedIndex = 1;
    }
  }

  close() {
    this.dialogRef.close();
  }

}
