import { Component, OnInit } from '@angular/core';
import {FdpBox} from '../fdp-box';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-fdp-box-form',
  templateUrl: './fdp-box-form.component.html',
  styleUrls: ['./fdp-box-form.component.scss']
})
export class FdpBoxFormComponent implements OnInit {

  public box: FdpBox;
  public boxFormGroup: FormGroup;

  constructor() {
    this.box = new FdpBox();
    this.boxFormGroup = new FormGroup({
      box_sound: new FormControl(this.box.sound, [
        Validators.required,
      ]),
    });
  }

  ngOnInit() {}

  public createBox() {
    console.log(this.box);
    return 0;
  }
}
