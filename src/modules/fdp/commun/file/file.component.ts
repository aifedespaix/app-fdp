import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {File} from './file';
import {FileService} from './file.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
})
export class FileComponent {
  public file: File;
  public loading: boolean;
  public error: string;

  @Input() label: string;
  @Input() fileTypes: string[];
  @Output() fileSaved = new EventEmitter<File>();

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private fb: FormBuilder, private fileService: FileService) {
    this.loading = false;
    this.file = new File();
    this.error = '';
  }

  loadFile(event) {
    this.error = null;
    this.loading = true;

    this.file.load(event).then( // Load client file
      () => {
        this.fileService.sendFile(this.file) // Send to Api
          .subscribe(file => {
              this.file = file;
              this.loading = false;
              this.saveFinished();
            },
            () => {
              this.loading = false;
              return false;
            });
      },
      err => {
        this.loading = false;
        this.error = err.message;
      },
    );
  }

  public acceptTypes() {
    return this.fileTypes.join();
  }

  private saveFinished() {
    this.fileSaved.emit(this.file);
  }

  public isImage() {
    return /image\/.*/.exec(this.file.type);
  }
}
