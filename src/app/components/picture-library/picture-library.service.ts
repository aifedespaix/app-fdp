import {Injectable} from '@angular/core';
import {PictureModelService} from '../../model/picture/picture-model.service';
import {PictureType} from '../../model/_generated/graphql.schema';

@Injectable()
export class PictureLibraryService {

  private loaded: boolean;

  constructor(
    private readonly pictureModelService: PictureModelService,
  ) {
    this.loaded = false;
  }

  private _pictures: PictureType[];

  myPictures(): PictureType[] {
    if (!this.loaded) {
      this.loadMyPictures();
    }
    return this._pictures;
  }

  private loadMyPictures() {
    const sub = this.pictureModelService
      .myPictures()
      .subscribe((pictures) => {
          this._pictures = pictures;
          this.loaded = true;
        },
        (e) => {
        }, () => {
          sub.unsubscribe();
        });
  }


}
