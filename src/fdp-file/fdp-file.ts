import {FdpFileService} from './fdp-file.service';

export class FdpFile {
  private _id: string;
  private _name: string;
  private _type: string;
  private _value: string;
  private _lastModified: number;
  private _size: number;

  constructor(name: string, type: string, value: string) {
    this._id = null;
    this._name = name;
    this._type = type;
    this._value = value;
    this._lastModified = 0;
    this._size = 0;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
  }

  get lastModified(): number {
    return this._lastModified;
  }

  set lastModified(value: number) {
    this._lastModified = value;
  }

  get size(): number {
    return this._size;
  }

  set size(value: number) {
    this._size = value;
  }

  protected canBeSaved() {
    return this.name && this.type && this.value;
  }

  public saveFile() {

  }

  public load(event: any, fdpFileService: FdpFileService) {
    if (!event.target || !event.target.files || event.target.files.length === 0 || !(event.target.files[0] instanceof File)) {
      throw Error('Fichier Invalide');
    }

    const file = event.target.files[0];
    // const reader = new FileReader();
    // reader.readAsDataURL(file);

    if (file.size > 1040000) {
      console.log(file.size);
      throw Error('Fichier trop gros');
    }

    this.type = file.type;
    this.name = file.name;
    this.lastModified = file.lastModified;
    this.size = file.size;

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      const self = this;

      reader.onload = function() {
        self.value = reader.result;
        resolve();
      };

      reader.onerror = function(error) {
        reject(error);
      };

      reader.readAsDataURL(file);
    });

    // const self = this;
    // reader.onload = () => {
    //   self.type = file.type;
    //   self.name = file.name;
    //   self.lastModified = file.lastModified;
    //   self.value = reader.result.split(',')[1];
    //   self.size = file.size;
    //   fdpFileService.sendFile(self).subscribe(id => {
    //     self.id = id;
    //   }, err => {
    //     console.log('err fdp file');
    //     console.log(err)
    //   });
    // };
  }

}
