import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-picture-dialog',
  templateUrl: './picture-dialog.component.html',
  styleUrls: ['./picture-dialog.component.scss'],
})
export class PictureDialogComponent implements OnInit {
  public title;
  public name;
  public description;

  constructor(
    private dialogRef: MatDialogRef<PictureDialogComponent>,
  ) {
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

  submitPicture() {
    console.log('RETOURNE !');
  }
}
