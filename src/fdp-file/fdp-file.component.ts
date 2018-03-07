import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
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
  @Input() label: string;
  @Input() fileTypes: string[];
  @Output() fileSaved = new EventEmitter<FdpFile>();

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private fb: FormBuilder,
              private fdpFileService: FdpFileService) {
    this.loading = false;
    this.file = new FdpFile();
    this.error = '';
  }

  loadFile(event) {
    this.error = null;
    this.loading = true;

    try {
      // On charge le fichier
      this.file.load(event).then(() => {
        // On sauvegarde le fichier
        this.fdpFileService.sendFile(this.file).subscribe((result) => {
          if (!result.success) {
            this.loading = false;
            return false;
          }
          this.file = result.file;
          this.loading = false; // On stop le load
          this.saveFinished();
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

  public acceptTypes() {
    return this.fileTypes.join();
  }

  private saveFinished() {
    this.fileSaved.emit(this.file);
  }
}
