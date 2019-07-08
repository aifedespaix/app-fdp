import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {File, FileAudioSliceInput} from '../../../graphql.schema';
import {SoundService} from '../sound.service';
import {ApolloQueryResult} from 'apollo-client';

@Component({
  selector: 'app-sound-import',
  templateUrl: './sound-import.component.html',
  styleUrls: ['./sound-import.component.scss'],
})
export class SoundImportComponent implements OnInit {

  private _file: File;
  @Output() sliced = new EventEmitter<FileAudioSliceInput>();
  private readonly _fileAudioSliceInput: FileAudioSliceInput;

  constructor(
    private readonly soundService: SoundService
  ) {
    this._file = null;
    this._fileAudioSliceInput = new FileAudioSliceInput();
  }

  ngOnInit(): void {
    this._fileAudioSliceInput.from = 0;
  }

  public updateFrom(value: number) {
    this._fileAudioSliceInput.from = value;
  }

  public updateTo(value: number) {
    this._fileAudioSliceInput.to = value;
  }

  public setSound(file: File) {
    this._file = file;
    this._fileAudioSliceInput.idFile = this._file.id;
  }

  public sliceAudio() {
    this.soundService.sliceAudio(this._fileAudioSliceInput).subscribe(
      ({data}: ApolloQueryResult<{ fileAudioSlice: File }>) => {
        console.log(data);
        this._file = data.fileAudioSlice;
      },
    );
  }

  get file(): File {
    return this._file;
  }

}
