import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FdpBoxService} from '../fdp-box.service';
import {FdpBox} from '../fdp-box';

@Component({
  selector: 'app-fdp-box-form',
  templateUrl: './fdp-box-form.component.html',
  styleUrls: ['./fdp-box-form.component.scss'],
})
export class FdpBoxFormComponent {

  public box: FdpBox;
  public error: string;
  public filesForm: FormGroup;
  public informationsForm: FormGroup;

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private fb: FormBuilder,
              private fdpBoxService: FdpBoxService) {
    this.box = new FdpBox();
    this.error = '';
    this.createForms();
  }

  createForms() {
    this.filesForm = new FormGroup({
      box_sound: new FormControl(this.box.soundId, [
        Validators.required,
      ]),
      box_miniature: new FormControl(this.box.miniatureId, [
        Validators.required,
      ]),
    });
    this.informationsForm = new FormGroup({
      box_title: new FormControl(this.box.title, [
        Validators.required,
      ]),
      box_description: new FormControl(this.box.description, [
        Validators.required,
      ]),
    });
  }

  onSubmit() {
    // const formModel = this.form.value;
  }

  sendBox() {
    this.fdpBoxService.createBox(this.box).subscribe(res => {
        console.log(res);
      }, error => {
        console.log(error);
      },
    );
  }

  loadSound($event: string) {
    this.box.soundId = $event;
  }

  loadMiniature($event: string) {
    this.box.miniatureId = $event;
  }

}
