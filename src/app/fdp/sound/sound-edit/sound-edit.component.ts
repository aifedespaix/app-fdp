import {Component, Input} from '@angular/core';
import {File} from '../../../graphql.schema';
import {OnInit} from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-sound-edit',
  templateUrl: './sound-edit.component.html',
  styleUrls: ['./sound-edit.component.scss'],
})
export class SoundEditComponent implements OnInit {

  @Input() private readonly file: File;
  private _audio: HTMLAudioElement;

  constructor() {
    this.file = null;

  }

  ngOnInit(): void {

    this._audio = new Audio(this.file.url);
    // sound.play();
    this._audio.play().then();

  }

  get audio(): HTMLAudioElement {
    return this._audio;
  }
}
