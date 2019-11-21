import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {PictureType} from '../../../model/graphql.schema';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss'],
})
export class PictureComponent implements OnInit, OnChanges {

  @Input() public picture: PictureType;
  public src: string;
  public srcset: string;
  public sizes: string;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.picture) {
      this.calcDatas();
    }
  }

  ngOnInit() {
    /**
     * todo ajouter width = et height = en fonction de la taille de la window (par palier)
     */
    this.calcDatas();
  }

  private calcDatas() {
    this.srcset = '';
    this.sizes = '';

    if (this.picture.images) {
      this.picture.images = this.picture.images.sort((image, lastImage) => image.width - lastImage.width);
      const largestImage = this.picture.images.pop();

      this.picture.images.forEach((image, i) => {
        this.srcset += `${image.url} ${image.width}w,`;
        this.sizes += `(max-width: ${image.width - 20}px) ${image.width}px,`;
      });

      this.srcset += `${largestImage.url} ${largestImage.width}w`;
      this.sizes += `${largestImage.width}px`;
      this.src = largestImage.url;
    }
  }
}
