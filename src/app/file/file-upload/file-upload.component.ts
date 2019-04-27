import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  private fileToUpload: File;

  constructor() {
    this.fileToUpload = null;
  }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);
    const myReader: FileReader = new FileReader();

    console.log(myReader.readAsDataURL(this.fileToUpload));
    myReader.onloadend = (e) => {
      console.log(myReader.result);
    };

  }

}
