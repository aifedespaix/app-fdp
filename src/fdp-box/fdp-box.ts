import {FdpFile} from '../fdp-file/fdp-file';
import {FdpFileImage} from '../fdp-file/fdp-file-image';
import {FdpFileSound} from '../fdp-file/fdp-file-sound';
import {FdpFileService} from '../fdp-file/fdp-file.service';

export class FdpBox {

  private _sound: FdpFileSound;
  private _title: string;
  private _description: string;
  private _miniature: FdpFileImage;
  private _tags: string[];

  constructor(protected fdpFileService: FdpFileService) {
    this.sound = new FdpFileImage('', '', '', fdpFileService);
    this.title = '';
    this.description = '';
    this._miniature = new FdpFileImage('', '', '', fdpFileService);
    this.tags = [];
  }

  get sound(): FdpFileSound {
    return this._sound;
  }

  set sound(value: FdpFileSound) {
    this._sound = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get miniature(): FdpFile {
    return this._miniature;
  }

  public saveMiniature(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this._miniature.name = file.name;
      this._miniature.type = file.type;
      this._miniature.value = reader.result.split(',')[1];

      try {
        this.miniature.saveFile();
      } catch(err) {
        throw err;
      }
    };
  }

  get tags(): string[] {
    return this._tags;
  }

  set tags(value: string[]) {
    this._tags = value;
  }
}
