import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
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
  public loading: boolean;
  public box: FdpBox;
  public error: string;

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private fb: FormBuilder,
              private fdpFileService: FdpFileService) {
    this.box = new FdpBox(this.fdpFileService);
    this.error = '';
    this.createForm();
  }

  createForm() {
    // this.form = this.fb.group({
    //   name: ['', Validators.required],
    // });
  }

  onSubmit() {
    // const formModel = this.form.value;
  }

  clearFile() {
    this.form.get('avatar').setValue(null);
    this.fileInput.nativeElement.value = '';
  }
}
