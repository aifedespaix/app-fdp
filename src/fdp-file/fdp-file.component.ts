import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FdpFile} from './fdp-file';
import {FdpFileService} from './fdp-file.service';

@Component({
  selector: 'app-fdp-file',
  templateUrl: './fdp-file.component.html',
  styleUrls: ['./fdp-file.component.scss'],
})
export class FdpFileComponent {

  public form: FormGroup;
  public file: FdpFile;
  public loading: boolean;
  public error: string;

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private fb: FormBuilder,
              private fdpFileService: FdpFileService) {
    this.loading = false;
    this.file = new FdpFile('', '', '');
    this.error = '';
    this.createForm();
  }

  createForm() {
    // this.form = this.fb.group({
    //     file: this.file.formResult,
    // });
  }

  loadFile(event) {
    this.error = null;
    try {
      // On charge le fichier
      this.file.load(event).then((a) => {
        console.log(a);
        console.log(this.file);
        // On l'envoie à l'API
        this.fdpFileService.sendFile(this.file).subscribe(res => {
          console.log(res);
        }, err => {
          console.log(err);
        });

      });
    } catch (err) {
      this.error = err.message;
    }
  }
}
