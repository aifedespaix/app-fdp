export abstract class Model {
  private _id: number;

  protected constructor() {
    this.reset();
  }

  public reader(data: any): Model {
    if (data.id && typeof data.id === typeof this.id) {
      this.id = data.id;
    }
    return this;
  }

  public reset() {
    this._id = -1;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }
}
