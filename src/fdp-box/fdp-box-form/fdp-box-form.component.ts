import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FdpBoxService} from '../fdp-box-form.service';
import {FdpFileService} from '../../fdp-file/fdp-file.service';
import {FdpBox} from '../fdp-box';
import {FdpFile} from '../../fdp-file/fdp-file';
import {FdpFileImage} from '../../fdp-file/fdp-file-image';

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
    this.loading = false;
    this.createForm();
    this.box = new FdpBox(this.fdpFileService);
    this.error = '';
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      avatar: null,
    });
  }

  onMiniatureChange(event) {
    this.error = null;
    try {
      if (event.target.files && event.target.files.length > 0) {
        this.box.saveMiniature(event.target.files[0]);
      } else {
        this.error = 'Fichier Invalide';
      }
    } catch (err) {
      this.error = err.message;
    }
  }

  onSubmit() {
    const formModel = this.form.value;
  }

  clearFile() {
    this.form.get('avatar').setValue(null);
    this.fileInput.nativeElement.value = '';
  }
}
