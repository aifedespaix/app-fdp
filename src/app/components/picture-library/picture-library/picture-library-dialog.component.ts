import {Component, OnInit} from '@angular/core';
import {PictureType} from '../../../model/_generated/graphql.schema';
import {MatDialogRef} from '@angular/material';
import {PictureModelService} from '../../../model/picture/picture-model.service';

@Component({
  selector: 'app-picture-library',
  templateUrl: './picture-library-dialog.component.html',
  styleUrls: ['./picture-library-dialog.component.scss'],
})
export class PictureLibraryDialogComponent implements OnInit {

  public pictures: PictureType[];

  constructor(
    private readonly dialogRef: MatDialogRef<PictureLibraryDialogComponent>,
    private readonly pictureModelService: PictureModelService,
  ) {
    this.pictures = [];
  }

  public submitPicture(picture: PictureType) {
    this.dialogRef.close(picture);
  }

  ngOnInit() {
    const sub = this.pictureModelService
      .myPictures()
      .subscribe((pictures) => {
        this.pictures = pictures;
        sub.unsubscribe();
      });
  }

  public addPicture(picture: PictureType) {
    this.pictures.push(picture);
  }
}
