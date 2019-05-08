import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, FormGroup} from '@angular/forms';
import {Box} from '../box';
import {BoxService} from '../box.service';
import {File} from '../../../commun/file/file';

@Component({
  selector: 'app-edit-box-dialog',
  templateUrl: 'edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {
  public editBoxFormGroup: FormGroup;
  public box: Box;

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    private boxService: BoxService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.box = new Box();
    this.editBoxFormGroup = new FormGroup({
      box_title: new FormControl(this.box.title, []),
      box_description: new FormControl(this.box.description, []),
    });
  }

  ngOnInit() {
    this.box = this.data.box;
  }

  public editBox() {
    this.boxService.editBox(this.box).subscribe(() => {
        this.dialogRef.close(true);
      },
      () => {
        this.dialogRef.close(false);
      },
    );
  }

  public updateMiniature(file: File) {
    this.box.miniature = file;
  }
}
