import { Component } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';
// import {ENTER, COMMA} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent {
  public tags: {}[];
  public visible = true;
  public selectable = true;
  public removable = true;
  public addOnBlur = true;

  // separatorKeysCodes = [ENTER, COMMA];

  constructor() {
    this.tags = [];
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.tags.push({ value: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(tag: any): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }
}
