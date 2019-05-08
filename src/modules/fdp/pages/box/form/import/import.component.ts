import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {File} from '../../../../commun/file/file';

@Component({
  selector: 'app-box-form-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss'],
})
export class ImportComponent {
  @Output() importDone = new EventEmitter<{ miniature: File, sound: File }>();
  @ViewChild('fileInput') fileInput: ElementRef;

  private _image: File;
  private _sound: File;

  public error: string;
  public filesForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this._sound = new File();
    this._image = new File();
    this.error = '';
    this.createForm();
  }

  public createForm() {
    this.filesForm = new FormGroup({
      box_sound: new FormControl(this._sound.id, [Validators.required]),
      box_miniature: new FormControl(this._image.id, [
        Validators.required,
      ]),
    });
  }

  public onImageSaved(image) {
    this._image = image;
    this.verifyComplete();
  }

  public onAudioSaved(sound) {
    this._sound = sound;
    this.verifyComplete();
  }

  public verifyComplete() {
    if (this.isComplete()) {
      this.importDone.emit({miniature: this.image, sound: this.sound});
    }
  }

  public isComplete() {
    return this._image.id && this._sound.id;
  }

  get image(): File {
    return this._image;
  }

  get sound(): File {
    return this._sound;
  }

}
