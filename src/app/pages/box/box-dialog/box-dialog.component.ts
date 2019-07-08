import {Component, HostBinding, HostListener, Inject, OnInit, ViewChild} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTabGroup } from '@angular/material/tabs';
import {BoxCreateInput, File, FileCreateInput} from '../../../graphql.schema';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-box-dialog',
  templateUrl: './box-dialog.component.html',
  styleUrls: ['./box-dialog.component.scss'],
})
export class BoxDialogComponent implements OnInit {
  private readonly boxCreate: BoxCreateInput;

  public soundForm: FormControl;
  public thumbnailForm: FormControl;
  private _sound: FileCreateInput;

  @ViewChild('tabs', { static: false }) tabGroup: MatTabGroup;
  @HostBinding('class.mobile-modaleContent') private readonly mobile = true;

  constructor(
    private dialogRef: MatDialogRef<BoxDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public youtube: boolean,
  ) {
    dialogRef.disableClose = true;
    this.boxCreate = new BoxCreateInput();
    this._sound = new FileCreateInput();
  }

  ngOnInit(): void {
    if (this.youtube) {
      this.tabGroup.selectedIndex = 1;
    }
    this.thumbnailForm = new FormControl(null, [Validators.required]);
    this.soundForm = new FormControl(null, [Validators.required]);

    // this.detailsForm = new FormGroup({
    //   box_title: new FormControl(null, [Validators.required, Validators.maxLength(20)]),
    //   box_description: new FormControl(null, [Validators.maxLength(200)]),
    // });
  }

  @HostListener('window:keyup.esc') onKeyUp() {
    this.dialogRef.close();
  }

  setThumbnail(thumbnail: File) {
    this.thumbnailForm.patchValue(thumbnail);
    // this.boxCreate.thumbnail.connect = {id: thumbnail.id};
  }

  close() {
    this.dialogRef.close();
  }

}
