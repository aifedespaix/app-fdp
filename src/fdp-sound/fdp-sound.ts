import {FdpFile} from '../fdp-file/fdp-file';

export class FdpSound {
  public audio: HTMLAudioElement;
  public file: FdpFile;

  constructor(file: FdpFile) {
    this.file = file;
    this.audio = new Audio(file.url);
  }

  play() {
    this.audio.play();
  }

  stop() {
    this.audio.pause();
  }

}
