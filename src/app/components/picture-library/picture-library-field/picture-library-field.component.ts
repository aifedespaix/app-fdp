import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {PictureType} from '../../../model/_generated/graphql.schema';
import {PictureLibraryDialogComponent} from '../picture-library/picture-library-dialog.component';
import {MatDialog} from '@angular/material';
import {PictureLibraryData} from '../picture-library/picture-library.data';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-picture-field',
  templateUrl: './picture-library-field.component.html',
  styleUrls: ['./picture-library-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PictureLibraryFieldComponent),
      multi: true,
    },
  ],
})
export class PictureLibraryFieldComponent implements ControlValueAccessor {
  @Input() public title = '';
  @Input() public description = '';
  @Input() label = 'Image';
  @Output() pictureSelected = new EventEmitter<PictureType>();

  private onChange: (newValue: PictureType) => void;

  constructor(
    private readonly dialog: MatDialog,
  ) {
  }

  public choosePicture() {
    this.dialog
      .open(PictureLibraryDialogComponent, {
        data: {
          title: this.title,
          description: this.description,
        } as PictureLibraryData,
      })
      .afterClosed()
      .subscribe((picture: PictureType) => {
        if (picture) {
          if (this.onChange) {
            this.onChange(picture);
          }
          this.pictureSelected.emit(picture);
        }
      });
    return false;
  }

  registerOnChange(fn: (newValue: PictureType) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
  }
}
