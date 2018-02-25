import {FdpFileService} from '../fdp-file/fdp-file.service';

export class FdpBox {

  private _soundId: string;
  private _title: string;
  private _description: string;
  private _miniatureId: string;
  private _tags: string[];

  constructor() {
    this.soundId = '';
    this.title = '';
    this.description = '';
    this.miniatureId = '';
    this.tags = [];
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

  get soundId(): string {
    return this._soundId;
  }

  set soundId(value: string) {
    this._soundId = value;
  }

  get miniatureId(): string {
    return this._miniatureId;
  }

  set miniatureId(value: string) {
    this._miniatureId = value;
  }

  get tags(): string[] {
    return this._tags;
  }

  set tags(value: string[]) {
    this._tags = value;
  }
}
