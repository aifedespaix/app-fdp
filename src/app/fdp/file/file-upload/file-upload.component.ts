import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FileService} from '../file.service';
import {File as FileSaved} from '../../../graphql.schema';
import {ApolloQueryResult} from 'apollo-client';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {

  public file: FileSaved;
  private _loading: boolean;
  private _error: string;
  @Input() private _label: string;
  @Input() private fileTypes: string[];

  @Output() fileSaved = new EventEmitter<FileSaved | File>();

  constructor(
    private readonly fileService: FileService,
    private readonly sanitizer: DomSanitizer,
  ) {
    this.fileTypes = [];
    this._loading = false;
    this.file = new FileSaved();
    this._error = '';
  }

  public handleFileInput(files: FileList) {
    this._loading = true;
    const fileSub = this.fileService.uploadFile(files.item(0))
      .subscribe((res: ApolloQueryResult<{ fileUpload: FileSaved }>) => {
        this.file = res.data.fileUpload;
        this.fileSaved.emit(this.file);
      },
      (err) => {
        console.log(err);
      },
      () => {
        this._loading = false;
        fileSub.unsubscribe();
      });
  }

  public acceptTypes() {
    return this.fileTypes.join();
  }

  public isImage() {
    return /image\/.*/.exec(this.fileTypes.join());
  }

  public getSafeUrl() {
    return this.sanitizer.bypassSecurityTrustUrl(this.file.url);
  }

  get loading(): boolean {
    return this._loading;
  }

  get error(): string {
    return this._error;
  }

  get label(): string {
    return this._label;
  }
}
