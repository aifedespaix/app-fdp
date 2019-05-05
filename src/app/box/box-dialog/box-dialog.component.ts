import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatTabGroup} from '@angular/material';
import {BoxCreateInput, File} from '../../graphql.schema';

@Component({
  selector: 'app-box-dialog',
  templateUrl: './box-dialog.component.html',
  styleUrls: ['./box-dialog.component.scss'],
})
export class BoxDialogComponent implements OnInit {
  @ViewChild('tabs') tabGroup: MatTabGroup;
  private readonly boxCreate: BoxCreateInput;
  // @HostBinding('class.mobile-modaleContent') mobile: boolean;

  constructor(
    private dialogRef: MatDialogRef<BoxDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public youtube: boolean,
  ) {
    dialogRef.disableClose = true;
    this.boxCreate = new BoxCreateInput();
    // this.mobile = false;
  }

  setThumbnail(thumbnail: File) {
    this.boxCreate.thumbnail.connect = {id: thumbnail.id};
  }

  setSound(sound: File) {
    this.boxCreate.sound.connect = {id: sound.id};
  }

  ngOnInit(): void {
    if (this.youtube) {
      this.tabGroup.selectedIndex = 1;
    }
    // this.mobile = true;
  }

  close() {
    this.dialogRef.close();
  }
}
