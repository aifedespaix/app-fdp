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

  public file: FdpFile;
  public loading: boolean;
  public error: string;
  public label: string;

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private fb: FormBuilder,
              private fdpFileService: FdpFileService) {
    this.loading = false;
    this.file = new FdpFile('', '', '');
    this.error = '';
  }

  loadFile(event) {
    this.error = null;
    this.loading = true;
    try {
      // On charge le fichier
      this.file.load(event, this.fdpFileService).then(() => {
        // On sauvegarde le fichier
        this.fdpFileService.sendFile(this.file).subscribe((savedId) => {
          this.file.id = savedId; // On affecte l'id
          this.loading = false;
        })
      }, (err) => {
        console.log('err');
        console.log(err.message);
        this.loading = false;
      });

    } catch (err) {
      this.loading = false;
      this.error = err.message;
    }
  }
}
