import {Component} from '@angular/core';
import {MatChipInputEvent} from '@angular/material';
// import {ENTER, COMMA} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-fdp-tag',
  templateUrl: './fdp-tag.component.html',
  styleUrls: ['./fdp-tag.component.scss'],
})
export class FdpTagComponent {

  public tags: {}[];
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;

  // separatorKeysCodes = [ENTER, COMMA];

  constructor() {
    this.tags = [];
  }

  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;

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
    let index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

}
