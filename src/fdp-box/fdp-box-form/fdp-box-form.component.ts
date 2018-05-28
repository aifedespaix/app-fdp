import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FdpBoxService} from '../fdp-box.service';
import {FdpBox} from '../fdp-box';
import {FdpFile} from '../../fdp-file/fdp-file';

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

  @Output() onBoxSaved = new EventEmitter<FdpBox>();

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private fb: FormBuilder,
              private fdpBoxService: FdpBoxService) {
    this.box = new FdpBox();
    this.error = '';
    this.createForms();
  }

  createForms() {
    this.filesForm = new FormGroup({
      box_sound: new FormControl(this.box.sound.id, [
        Validators.required,
      ]),
      box_miniature: new FormControl(this.box.miniature.id, [
        Validators.required,
      ]),
    });
    this.informationsForm = new FormGroup({
      box_title: new FormControl(this.box.title, [
        Validators.required,
      ]),
      box_description: new FormControl(this.box.description, []),
    });
  }

  sendBox() {
    this.fdpBoxService.createBox(this.box).subscribe(res => {
        if (res.box) {
          this.onBoxSaved.emit(res.box);
        }
      }, error => {
        console.log(error);
      },
    );
  }

  loadSound(file: FdpFile) {
    this.box.sound = file;
  }

  loadMiniature(file: FdpFile) {
    this.box.miniature = file;
  }

}
