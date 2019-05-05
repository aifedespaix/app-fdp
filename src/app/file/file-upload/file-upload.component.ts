import {Component, Input} from '@angular/core';
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

  // @Output() fileSaved = new EventEmitter<FdpFile>();

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
    const fileSub = this.fileService.uploadFile(files.item(0)).subscribe((res: ApolloQueryResult<{fileUpload: File}>) => {
        console.log(res.data.fileUpload.url);
        this.file = res.data.fileUpload;
      },
      (err) => {
        console.log(err);
      },
      () => {
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
