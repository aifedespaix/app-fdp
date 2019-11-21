import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {PictureType} from '../../../model/graphql.schema';
import {PictureModelService} from '../../../model/picture/picture-model.service';


@Component({
  selector: 'app-picture-upload',
  templateUrl: './picture-upload.component.html',
  styleUrls: ['./picture-upload.component.scss'],
})
export class PictureUploadComponent implements OnInit {

  public isLoading: boolean;
  public picture: PictureType;
  private file: File;
  public uuid: string;

  @Output() private pictureSaved: EventEmitter<PictureType>;
  @Input() public title = '';
  @Input() public name = '';
  @Input() public description = '';

  constructor(
    private readonly pictureModelService: PictureModelService,
    @Inject('UUID') private readonly UUID: () => string,
  ) {
    this.pictureSaved = new EventEmitter<PictureType>();
  }

  private _error: string;

  get error(): string {
    return this._error;
  }

  ngOnInit() {
    this.uuid = this.UUID();
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
