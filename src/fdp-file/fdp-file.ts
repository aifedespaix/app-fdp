export class FdpFile {
  private _id: string;
  private _name: string;
  private _type: string;
  private _value: string;
  private _lastModified: number;
  private _size: number;
  private _url: string;

  constructor(name: string, type: string, value: string) {
    this._id = null;
    this._name = name;
    this._type = type;
    this._value = value;
    this._lastModified = 0;
    this._size = 0;
    this._url = '';
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

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  public load(event: any) {
    if (!event.target || !event.target.files || event.target.files.length === 0 || !(event.target.files[0] instanceof File)) {
      throw Error('Fichier Invalide');
    }

    const file = event.target.files[0];

    this.size = file.size;
    if (this.size > 5000000) {
      throw Error('Fichier trop gros');
    }

    this.type = file.type;
    this.name = file.name;
    this.lastModified = file.lastModified;

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
  }

  static reader(fileData: any) {
    const file = new FdpFile('', '', '');

    if(fileData.id) {
      file.id = fileData.id;
    }
    if(fileData.name) {
      file.name = fileData.name;
    }
    if(fileData.type) {
      file.type = fileData.type;
    }
    if(fileData.value) {
      file.value = fileData.value;
    }
    if(fileData.lastModified) {
      file.lastModified = fileData.lastModified;
    }
    if(fileData.size) {
      file.size = fileData.size;
    }
    if(fileData.url) {
      file.url = fileData.url;
    }

    return file;
  }
}
