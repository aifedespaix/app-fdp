import { Component, OnInit } from '@angular/core';
import {FileService} from '../file.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {

  constructor(
    private readonly fileService: FileService,
  ) {
  }

  handleFileInput(files: FileList) {
    this.fileService.uploadFile(files.item(0));
  }

}
