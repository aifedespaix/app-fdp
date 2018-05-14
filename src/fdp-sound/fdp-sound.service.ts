import {Injectable} from '@angular/core';
import 'rxjs/add/operator/delay';
import {FdpSound} from './fdp-sound';
import {FdpFile} from '../fdp-file/fdp-file';

@Injectable()
export class FdpSoundService {

  public sound: FdpSound;

  constructor() {
    this.sound = null;
  }

  play(file: FdpFile) {
    if(this.sound) {
      this.stop();
    }
    this.sound = new FdpSound(file);
    this.sound.play();
  }

  stop() {
    this.sound.stop();
  }
}
