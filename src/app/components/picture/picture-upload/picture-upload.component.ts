import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {PictureType} from '../../../model/_generated/graphql.schema';
import {PictureModelService} from '../../../model/picture/picture-model.service';
import {SnackbarComponent} from '../../snackbar/snackbar.component';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-picture-upload',
  templateUrl: './picture-upload.component.html',
  styleUrls: ['./picture-upload.component.scss'],
})
export class PictureUploadComponent implements OnInit {

  @Input() public title = '';
  @Input() public description = '';
  @Input() public label = 'Choisir une image';
  @Output() private pictureSaved: EventEmitter<PictureType>;

  public isLoading: boolean;
  public picture: PictureType;
  public uuid: string;
  public types = ['image/png', 'image/jpg', 'image/gif'];
  private file: File;


  constructor(
    private readonly snackBar: MatSnackBar,
    private readonly pictureModelService: PictureModelService,
    @Inject('UUID') private readonly UUID: () => string,
  ) {
    this.pictureSaved = new EventEmitter<PictureType>();
  }

  private _error: string;

  get error(): string {
    return this._error;
  }

  public ngOnInit() {
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
        () => {
          this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 5000,
            data: {icon: 'error', color: 'warn', message: 'Une erreur est survenue, veuillez réessayer'},
          });
        },
        () => {
          this.isLoading = false;
          fileSub.unsubscribe();
        });
  }

}
