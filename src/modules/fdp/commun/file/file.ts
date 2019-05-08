export class File {

  private _id: string;
  private _name: string;
  private _type: string;
  private _value: string;
  private _lastModified: number;
  private _size: number;
  private _url: string;

  constructor() {
    this.reset();
  }

  public reader(fileData: any) {
    if (fileData.id) {
      this.id = fileData.id;
    }
    if (fileData.name) {
      this.name = fileData.name;
    }
    if (fileData.type) {
      this.type = fileData.type;
    }
    if (fileData.value) {
      this.value = fileData.value;
    }
    if (fileData.lastModified) {
      this.lastModified = fileData.lastModified;
    }
    if (fileData.size) {
      this.size = fileData.size;
    }
    if (fileData.url) {
      this.url = fileData.url;
    }
  }

  public load(event: any) {
    if (!event.target || !event.target.files || event.target.files.length === 0 || !event.target.files[0]) {
      return Promise.reject(Error('Fichier Invalide'));
    }

    const file = event.target.files[0];

    this.size = file.size;
    if (this.size > 5000000) {
      return Promise.reject(Error('Fichier trop gros'));
    }

    this.type = file.type;
    this.name = file.name;
    this.lastModified = file.lastModified;

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      const self:any = this; // todo repare

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

  public reset() {
    this._id = null;
    this._name = '';
    this._type = '';
    this._value = '';
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

}
