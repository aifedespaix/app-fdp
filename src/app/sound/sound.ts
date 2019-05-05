import {File} from '../graphql.schema';

export class Sound {
  public audio: HTMLAudioElement;
  public file: File;

  constructor(file: File) {
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
