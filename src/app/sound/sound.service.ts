import {Injectable} from '@angular/core';
// import 'rxjs/add/operator/delay';
import {Sound} from './sound';
import {File} from '../graphql.schema';

@Injectable()
export class SoundService {

  public sound: Sound;

  constructor() {
    this.sound = null;
  }

  play(file: File) {
    if (this.sound) {
      this.stop();
    }
    this.sound = new Sound(file);
    this.sound.play();
  }

  stop() {
    this.sound.stop();
  }
}
