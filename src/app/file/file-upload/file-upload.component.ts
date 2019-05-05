import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FileService} from '../file.service';
import {File} from '../../graphql.schema';
import {ApolloQueryResult} from 'apollo-client';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {

  public file: File;
  private loading: boolean;
  private error: string;
  @Input() private label: string;
  @Input() private fileTypes: string[];

  @Output() fileSaved = new EventEmitter<File>();

  constructor(
    private readonly fileService: FileService,
    private readonly sanitizer: DomSanitizer,
  ) {
    this.fileTypes = [];
    this.loading = false;
    this.file = new File();
    this.error = '';
  }

  public handleFileInput(files: FileList) {
    this.loading = true;
    const fileSub = this.fileService.uploadFile(files.item(0)).subscribe((res: ApolloQueryResult<{fileUpload: File}>) => {
        this.file = res.data.fileUpload;
        this.fileSaved.emit(this.file);
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.loading = false;
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

}
