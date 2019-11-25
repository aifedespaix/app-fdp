import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {PictureType} from '../../../model/_generated/graphql.schema';

@Component({
  selector: 'app-picture-dialog',
  templateUrl: './picture-dialog.component.html',
  styleUrls: ['./picture-dialog.component.scss'],
})
export class PictureDialogComponent {
  public title: string;
  public name: string;
  public description: string;
  public picture: PictureType;

  constructor(
    private dialogRef: MatDialogRef<PictureDialogComponent>,
  ) {
    this.picture = null;
  }

  submitPicture() {
    this.dialogRef.close(this.picture);
  }

  setPicture(picture: PictureType) {
    this.picture = picture;
  }
}
