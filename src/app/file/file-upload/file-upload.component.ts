import { Component, OnInit } from '@angular/core';
import {FileService} from '../file.service';
import {File} from '../file';
import {ResourceCreateInput} from '../../graphql.schema';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  constructor(
    private readonly fileService: FileService,
  ) {
  }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    const file = files.item(0);
    const myReader: FileReader = new FileReader();
    const fileUpload = file as {} as ResourceCreateInput;
    console.log("aaaa");
    myReader.readAsDataURL(file);
    myReader.onloadend = (e) => {
      fileUpload.base64 = myReader.result as string;
      this.fileService.uploadFile(fileUpload);
    };
    // this.file = this.fileService.uploadFile(this.file);

  }

}
