import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, FormGroup} from '@angular/forms';
import {FdpBox} from '../fdp-box';
import {FdpBoxService} from '../fdp-box.service';

@Component({
  selector: 'fdp-dialog-edit-box-dialog',
  templateUrl: 'fdp-box-edit.dialog.component.html',
})
export class FdpBoxEditDialog {
  public editBoxFormGroup: FormGroup;
  public box: FdpBox;

  constructor(public dialogRef: MatDialogRef<FdpBoxEditDialog>,
              private fdpBoxService: FdpBoxService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.box = new FdpBox();
    this.editBoxFormGroup = new FormGroup({
      box_title: new FormControl(this.box.title, []),
      box_description: new FormControl(this.box.description, []),
    });
  }

  ngOnInit() {
    this.box = this.data.box;
  }

  public editBox() {
    this.fdpBoxService.editBox(this.box).subscribe(() => {
      console.log('gg');
    });
  }

  public updateMiniature($event) {
    this.box.miniature.reset();
    this.box.miniature.id = $event;
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }
}
