import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {PictureType} from '../../../model/_generated/graphql.schema';
import * as _ from 'lodash';
import {getUndefinedPictureMock} from '../../../model/picture/picture.mocks';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss'],
})
export class PictureComponent implements OnInit, OnChanges {

  @Input() public picture: PictureType;
  @Input() public objectFit: 'cover' | 'contain' = 'contain';

  public src: string;
  public srcset: string;
  public sizes: string;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.picture.previousValue && changes.picture.previousValue.id !== changes.picture.currentValue.id) {
      this.calcDatas();
    }
  }

  ngOnInit() {
    this.calcDatas();
    if(!this.picture) {
      this.picture = getUndefinedPictureMock();
    }
  }

  private calcDatas() {
    this.srcset = '';
    this.sizes = '';

    const calcPicture = _.cloneDeep(this.picture);
    calcPicture.images = calcPicture.images.sort((image, lastImage) => image.width - lastImage.width);
    const largestImage = calcPicture.images.pop();

    calcPicture.images.forEach((image) => {
      this.srcset += `${encodeURI(image.url)} ${image.width}w,`;
      this.sizes += `(max-width: ${image.width - 20}px) ${image.width}px,`;
    });

    this.srcset += `${encodeURI(largestImage.url)} ${largestImage.width}w`;
    this.sizes += `${largestImage.width}px`;
    this.src = largestImage.url;
  }
}
