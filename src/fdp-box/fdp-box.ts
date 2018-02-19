export class FdpBox {

  private _title: string;
  private _sound: string;
  private _description: string;
  private _image: string;
  private _tags: string[];

  constructor() {}

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get sound(): string {
    return this._sound;
  }

  set sound(value: string) {
    this._sound = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get tags(): string[] {
    return this._tags;
  }

  set tags(value: string[]) {
    this._tags = value;
  }
}
