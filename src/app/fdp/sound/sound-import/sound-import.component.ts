import {Component} from '@angular/core';
import {File} from '../../../graphql.schema';
import {OnInit} from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-sound-import',
  templateUrl: './sound-import.component.html',
  styleUrls: ['./sound-import.component.scss'],
})
export class SoundImportComponent implements OnInit {

  private _file: File;


  constructor() {
    this._file = null;
  }

  ngOnInit(): void {
  }

  setSound(file: File) {
    this.file = file;
    // this.soundForm.patchValue(sound);
    // this.boxCreate.sound.connect = {id: sound.id};
  }

  set file(value: File) {
    this._file = value;
  }

  get file(): File {
    return this._file;
  }
}
