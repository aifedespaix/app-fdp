import { File } from '../../commun/file/file';
import {Sound} from '../../commun/sound/sound';
import {User} from '../user/user';

export class Box {
  private _id: string;
  private _sound: Sound;
  private _title: string;
  private _description: string;
  private _miniature: File;
  private _tags: string[];
  private _owner: User;

  constructor() { // ça c'est pour construire
    this.reset();
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

  get sound(): Sound { // ça c'est pour avoir les sons
    return this._sound;
  }

  set sound(sound: Sound) {
    this._sound = sound;
  }

  get miniature(): File { // pour avoir la miniature
    return this._miniature;
  }

  set miniature(value: File) {
    this._miniature = value;
  }

  get tags(): string[] {
    return this._tags;
  }

  set tags(value: string[]) {
    this._tags = value;
  }

  get owner(): User {
    return this._owner;
  }

  set owner(value: User) {
    this._owner = value;
  }

  static reader(boxData: any): Box {
    const box = new Box();

    if (boxData.id) {
      box.id = boxData.id;
    }
    if (boxData.title) { // joan pd
      box.title = boxData.title;
    }
    if (boxData.description) {
      box.description = boxData.description;
    }
    if (boxData.sound) {
      box.sound.reader(boxData.sound);
    }
    if (boxData.miniature) {
      box.miniature = new File();
      box.miniature.reader(boxData.miniature);
    }
    if (boxData.tags) {
      box.tags = boxData.tags;
    }
    if (boxData.owner) {
      box.owner = new User();
      box.owner.reader(boxData.owner);
    }

    return box;
  }

  private reset() {
    this.sound = new Sound();
    this.title = '';
    this.description = '';
    this.miniature = new File();
    this.tags = [];
    this.owner = new User();
  }
}
