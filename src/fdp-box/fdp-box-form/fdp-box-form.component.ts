import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FdpBoxService} from '../fdp-box-form.service';
import {FdpFileService} from '../../fdp-file/fdp-file.service';
import {FdpBox} from '../fdp-box';

@Component({
  selector: 'app-fdp-box-form',
  templateUrl: './fdp-box-form.component.html',
  styleUrls: ['./fdp-box-form.component.scss'],
})
export class FdpBoxFormComponent {

  public form: FormGroup;
  public box: FdpBox;
  public error: string;
  public filesForm: FormGroup;

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private fb: FormBuilder,
              private fdpFileService: FdpFileService) {
    this.box = new FdpBox(this.fdpFileService);
    this.error = '';
    this.createForm();
    this.createForm();
  }

  createForm() {
    this.filesForm = new FormGroup({
      box_sound: new FormControl(this.box.soundId, [
        Validators.required,
      ]),
      box_miniature: new FormControl(this.box.miniatureId, [
        Validators.required,
      ]),
    });
  }

  onSubmit() {
    // const formModel = this.form.value;
  }

  clearFile() {
    this.form.get('avatar').setValue(null);
    this.fileInput.nativeElement.value = '';
  }
}
