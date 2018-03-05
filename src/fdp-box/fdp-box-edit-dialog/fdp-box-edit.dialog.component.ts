import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'fdp-dialog-edit-box-dialog',
  templateUrl: 'fdp-box-edit.dialog.component.html',
})
export class FdpBoxEditDialog {
  constructor(
    public dialogRef: MatDialogRef<FdpBoxEditDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close(false);
  }
}
