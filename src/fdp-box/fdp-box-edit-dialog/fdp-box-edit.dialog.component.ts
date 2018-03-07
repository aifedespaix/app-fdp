import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, FormGroup} from '@angular/forms';
import {FdpBox} from '../fdp-box';
import {FdpBoxService} from '../fdp-box.service';
import {FdpFile} from '../../fdp-file/fdp-file';

@Component({
  selector: 'fdp-dialog-edit-box-dialog',
  templateUrl: 'fdp-box-edit.dialog.component.html',
})
export class FdpBoxEditDialog {
  public editBoxFormGroup: FormGroup;
  public box: FdpBox;
  public error: string;

  constructor(public dialogRef: MatDialogRef<FdpBoxEditDialog>,
              private fdpBoxService: FdpBoxService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.box = new FdpBox();
    this.error = '';
    this.editBoxFormGroup = new FormGroup({
      box_title: new FormControl(this.box.title, []),
      box_description: new FormControl(this.box.description, []),
    });
  }

  ngOnInit() {
    this.box = this.data.box;
  }

  public editBox() {
    this.fdpBoxService.editBox(this.box).subscribe((res) => {
      this.dialogRef.close(res.success);
    });
  }

  public updateMiniature(file: FdpFile) {
    this.box.miniature.reset();
    this.box.miniature = file;
  }

}
