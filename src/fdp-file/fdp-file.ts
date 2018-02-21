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

  public async load(event: any) {
    if (!event.target || !event.target.files || event.target.files.length === 0 || !(event.target.files[0] instanceof File)) {
      throw Error('Fichier Invalide');
    }

    const file = event.target.files[0];

    console.log('file');
    console.log(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => { // todo : c'est de l'event, a voir comment on passe à la sauvegarde ... psk la function se finit et attend pas le onload, logique
      this.name = file.name;
      console.log('this.name');
      console.log(this.name);
      console.log('file.name');
      console.log(file.name);
      this.type = file.type;
      this.lastModified = file.lastModified;
      this.value = reader.result.split(',')[1];
      this.size = file.size;
      console.log('this 1');
      console.log(this);
    };
    console.log('this 2');
    console.log(this);
    return true;
  }
}
