import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PictureType} from '../../../model/_generated/graphql.schema';
import {PictureLibraryDialogComponent} from '../picture-library/picture-library-dialog.component';
import {MatDialog} from '@angular/material';
import {PictureLibraryData} from '../picture-library/picture-library.data';

@Component({
  selector: 'app-picture-library-pick',
  templateUrl: './picture-library-pick.component.html',
  styleUrls: ['./picture-library-pick.component.scss'],
})
export class PictureLibraryPickComponent {

  @Input() public title = '';
  @Input() public description = '';
  @Input() label = 'Image';
  @Output() private pictureSelected: EventEmitter<PictureType>;

  constructor(
    private readonly dialog: MatDialog,
  ) {
    this.pictureSelected = new EventEmitter<PictureType>();
  }

  public choosePicture() {
    this.dialog
      .open(PictureLibraryDialogComponent, {
        data: {
          title: this.title,
          description: this.description,
        } as PictureLibraryData
      })
      .afterClosed()
      .subscribe((picture: PictureType) => {
        if (picture) {
          this.pictureSelected.emit(picture);
        }
      });
    return false;
  }

}
