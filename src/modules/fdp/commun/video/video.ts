import {Model} from '../../../../abstract/model';

export class Video extends Model {
  public static readonly types = {video: 1, playlist: 2};

  private _type: number;
  private _title: string;
  private _description: string;
  private _youtubeId: string;
  private _time: Time;
  private _autoplay: boolean;
  private _rel: boolean; // Show recommanded video at the end
  private _loop: boolean;

  public constructor() {
    super();
  }

  public reader(data: any): Video {
    super.reader(data);

    if (data.type && typeof data.type === typeof this.type) {
      this.type = data.type;
    }
    if (data.title && typeof data.title === typeof this.title) {
      this.title = data.title;
    }
    if (data.description && typeof data.description === typeof this.description) {
      this.description = data.description;
    }
    if (data.youtubeId && typeof data.youtubeId === typeof this.youtubeId) {
      this.youtubeId = data.youtubeId;
    }
    if (data.time && typeof data.time === typeof this.time) {
      this.time = data.time;
    }
    if (data.autoplay && typeof data.autoplay === typeof this.autoplay) {
      this.autoplay = data.autoplay;
    }
    if (data.rel && typeof data.rel === typeof this.rel) {
      this.rel = data.rel;
    }
    if (data.loop && typeof data.loop === typeof this.loop) {
      this.loop = data.loop;
    }

    return this;
  }

  public reset() {
    super.reset();
    this._type = Video.types.video;
    this._title = '';
    this._description = '';
    this._youtubeId = '';
    if (this._time) {
      this._time.reset();
    } else {
      this._time = new Time();
    }
    this._autoplay = false;
    this._rel = false;
    this._loop = false;
  }

  get type(): number {
    return this._type;
  }

  set type(value: number) {
    this._type = value;
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

  get youtubeId(): string {
    return this._youtubeId;
  }

  set youtubeId(value: string) {
    this._youtubeId = value;
  }

  get time(): Time {
    return this._time;
  }

  set time(value: Time) {
    this._time = value;
  }

  get autoplay(): boolean {
    return this._autoplay;
  }

  set autoplay(value: boolean) {
    this._autoplay = value;
  }

  get rel(): boolean {
    return this._rel;
  }

  set rel(value: boolean) {
    this._rel = value;
  }

  get loop(): boolean {
    return this._loop;
  }

  set loop(value: boolean) {
    this._loop = value;
  }
}

export class Time extends Model {
  private _start: number;
  private _end: number;

  constructor() {
    super();
  }

  public reset() {
    super.reset();
    this._start = 0;
    this._end = 0;
  }

  public reader(data: any) {
    super.reader(data);
    if (data.start && typeof data.start === typeof this.start) {
      this.start = data.start;
    }
    if (data.end && typeof data.end === typeof this.end) {
      this.end = data.end;
    }

    return this;
  }

  get start(): number {
    return this._start;
  }

  set start(value: number) {
    this._start = value;
  }

  get end(): number {
    return this._end;
  }

  set end(value: number) {
    this._end = value;
  }
}
