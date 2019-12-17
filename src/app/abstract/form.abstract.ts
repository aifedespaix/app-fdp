import {EventEmitter, Input, Output} from '@angular/core';

export abstract class Form<T extends { id: string }> {

  @Input() elem: T;
  @Output() newElem: EventEmitter<T>;

  protected constructor() {
    this.newElem = new EventEmitter<T>();
  }

  public submit() {
    if (this.elem.id) {
      this.update();
    } else {
      this.create();
    }
  }

  protected abstract update(): void;

  protected abstract create(): void;

  protected abstract getInput(): void;

  protected abstract getSaveLabel(): string;
}
