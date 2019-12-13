import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {PictureType} from '../../../model/_generated/graphql.schema';
import {getUndefinedPictureMock} from '../../../model/picture/picture.mocks';

@Component({
  selector: 'app-picture-library-pick-and-preview',
  templateUrl: './picture-library-pick-and-preview.component.html',
  styleUrls: ['./picture-library-pick-and-preview.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PictureLibraryPickAndPreviewComponent),
      multi: true,
    },
  ],
})
export class PictureLibraryPickAndPreviewComponent implements OnInit, ControlValueAccessor {

  @Input() label = 'Choisir une image';
  @Input() titleLabel = 'image';
  public picture: PictureType;

  private onChange: (newValue: PictureType) => void;

  constructor() {
    this.picture = getUndefinedPictureMock();
  }

  ngOnInit() {
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

  emitPicture(picture: PictureType) {
    this.picture = picture;
    this.onChange(picture);
  }
}
