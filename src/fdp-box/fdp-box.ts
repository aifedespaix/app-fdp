import {FdpFile} from '../fdp-file/fdp-file';

export class FdpBox {

  private _id: string;
  private _sound: FdpFile;
  private _title: string;
  private _description: string;
  private _miniature: FdpFile;
  private _tags: string[];

  constructor() {
    this.sound = new FdpFile();
    this.title = '';
    this.description = '';
    this.miniature = new FdpFile();
    this.tags = [];
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
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

  get sound(): FdpFile {
    return this._sound;
  }

  set sound(value: FdpFile) {
    this._sound = value;
  }

  get miniature(): FdpFile {
    return this._miniature;
  }

  set miniature(value: FdpFile) {
    this._miniature = value;
  }

  get tags(): string[] {
    return this._tags;
  }

  set tags(value: string[]) {
    this._tags = value;
  }

  static reader(boxData: any): FdpBox {
    const box = new FdpBox();

    if (boxData.id) {
      box.id = boxData.id;
    }
    if (boxData.title) {
      box.title = boxData.title;
    }
    if (boxData.description) {
      box.description = boxData.description;
    }
    if (boxData.sound) {
      box.sound = FdpFile.reader(boxData.sound);
    }
    if (boxData.miniature) {
      box.miniature = FdpFile.reader(boxData.miniature);
    }
    if (boxData.tags) {
      box.tags = boxData.tags;
    }

    return box;
  }
}
