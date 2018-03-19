import {Injectable} from '@angular/core';
import 'rxjs/add/operator/delay';
import {FdpSound} from './fdp-sound';
import {FdpFile} from '../fdp-file/fdp-file';

@Injectable()
export class FdpSoundService {

  public sounds: FdpSound[];

  constructor() {
    this.sounds = [];
  }

  play(file: FdpFile) {
    this.sounds[file.id] = new FdpSound(file);
    this.sounds[file.id].play();
  }
}
