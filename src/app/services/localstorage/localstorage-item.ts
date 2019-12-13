export class LocalstorageItem<T> {

  private readonly _id: string;
  private readonly _defaultValue: T;
  private readonly _isBrowser: boolean;

  constructor(
    id: string,
    defaultValue: T,
    isBrowser: boolean,
  ) {
    this._id = id;
    this._defaultValue = defaultValue;
    this._isBrowser = isBrowser;
  }

  get value(): T {
    if (this._isBrowser) {
      const value = localStorage.getItem(this._id);
      if (value) {
        const item = JSON.parse(value) as LocalstorageItem<T>;
        return item.value;
      }
    }
    return this._defaultValue;
  }

  set value(value: T) {
    localStorage.setItem(this._id, JSON.stringify({value}));
  }

}
