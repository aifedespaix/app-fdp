import {Component, Input} from '@angular/core';
import {File} from '../../../graphql.schema';
import {OnInit} from '@angular/core/src/metadata/lifecycle_hooks';
import { Howl } from 'howler';


@Component({
  selector: 'app-sound-edit',
  templateUrl: './sound-edit.component.html',
  styleUrls: ['./sound-edit.component.scss'],
})
export class SoundEditComponent implements OnInit {

  @Input() private readonly file: File;

  constructor() {
    this.file = null;

  }

  ngOnInit(): void {
    const sound = new Howl({
      src: [this.file.url],
      html5 :true
    });

    // sound.play();

  }

}
