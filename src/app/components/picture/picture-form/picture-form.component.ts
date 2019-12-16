import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {PictureType} from '../../../model/_generated/graphql.schema';
import {PictureModelService} from '../../../model/picture/picture-model.service';
import {SnackService} from '../../../services/snack/snack.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-picture-upload',
  templateUrl: './picture-form.component.html',
  styleUrls: ['./picture-form.component.scss'],
})
export class PictureFormComponent implements OnInit {

  @Input() public title = '';
  @Input() public description = '';
  @Input() public label = 'Choisir une image';
  public isLoading: boolean;
  public picture: PictureType;
  public imageData: string;
  public uuid: string;
  public types = ['image/*'];
  @Output() private pictureSaved: EventEmitter<PictureType>;
  private file: File;

  constructor(
    private readonly http: HttpClient,
    private readonly snackService: SnackService,
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
    this.prepareMeta(file.name);
    const reader = new FileReader();
    reader.onload = ((e: any) => {
      this.imageData = e.target.result;
    });
    reader.readAsDataURL(file);
  }

  public uploadFile() {
    this.isLoading = true;
    const fileSub = this.pictureModelService
      .createPicture({description: this.description, title: this.title}, this.file)
      .subscribe((picture) => {
          this.picture = picture;
          this.pictureSaved.emit(this.picture);
        },
        () => {
          this.snackService.error('Une erreur est survenue, veuillez réessayer');
        },
        () => {
          this.isLoading = false;
          fileSub.unsubscribe();
        });
  }

  private prepareMeta(name: string) {
    if (!this.title || !this.description) {
      const split = name.split('.');
      split.pop();
      name = split
        .join(' ')
        .replace(/(-|_)/g, ' ');

      console.log(name);
      if (!this.title) {
        this.title = name;
      }
      if (!this.description) {
        this.description = name;
      }
    }
  }
}
