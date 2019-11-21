import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PictureType} from '../../../model/graphql.schema';
import {PictureModelService} from '../../../model/picture/picture-model.service';
import {v1 as uuid} from 'uuid';

@Component({
  selector: 'app-picture-upload',
  templateUrl: './picture-upload.component.html',
  styleUrls: ['./picture-upload.component.scss'],
})
export class PictureUploadComponent implements OnInit {

  public isLoading: boolean;
  public picture: PictureType;
  private file: File;
  private uuid: string;

  @Output() private pictureSaved: EventEmitter<PictureType>;
  @Input() private title = '';
  @Input() private name = '';
  @Input() private description = '';

  constructor(
    private readonly pictureModelService: PictureModelService,
  ) {
    this.pictureSaved = new EventEmitter<PictureType>();
    this.uuid = uuid();
  }

  private _error: string;

  get error(): string {
    return this._error;
  }

  ngOnInit() {
  }

  public onFileChange({target: {validity, files: [file]}}: any) {
    this.file = file;
    this.uploadFile();
  }

  private uploadFile() {
    this.isLoading = true;
    const fileSub = this.pictureModelService
      .createPicture({description: this.description, title: this.title}, this.file)
      .subscribe((picture) => {
          this.picture = picture;
          this.pictureSaved.emit(this.picture);
        },
        (err) => {
          console.log(err);
        },
        () => {
          this.isLoading = false;
          fileSub.unsubscribe();
        });
  }

}
