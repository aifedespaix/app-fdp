export class FdpFile {
  private _id: string;
  private _name: string;
  private _type: string;
  private _value: string;
  private _formResult: any;

  constructor(name: string, type: string, value: string) {
    this._id = null;
    this._name = name;
    this._type = type;
    this._value = value;
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

  get formResult(): any {
    return this._formResult;
  }

  set formResult(value: any) {
    console.log(value);
    // console.log(instanceof value);
    this._formResult = value;
  }

  protected canBeSaved() {
    return this.name && this.type && this.value;
  }

  public saveFile() {

  }

}
