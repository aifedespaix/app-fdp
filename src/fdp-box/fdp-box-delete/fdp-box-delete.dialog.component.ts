import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'fdp-dialog-confirm-delete-box-dialog',
  templateUrl: 'fdp-box-delete.dialog.html',
})
export class FdpBoxConfirmDeleteBoxDialog {
  constructor(
    public dialogRef: MatDialogRef<FdpBoxConfirmDeleteBoxDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close(false);
  }
}
