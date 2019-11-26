import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from './card/card.component';
import {PictureModule} from '../picture/picture.module';
import { CardHeaderComponent } from './card-header/card-header.component';
import { CardFooterComponent } from './card-footer/card-footer.component';
import { CardContentComponent } from './card-content/card-content.component';
import { CardPictureComponent } from './card-picture/card-picture.component';

@NgModule({
  declarations: [
    CardComponent,
    CardHeaderComponent,
    CardFooterComponent,
    CardContentComponent,
    CardPictureComponent,
  ],
  imports: [
    CommonModule,
    PictureModule,
  ],
  exports: [
    CardComponent,
    CardHeaderComponent,
    CardPictureComponent,
    CardContentComponent,
    CardFooterComponent,
  ],
})
export class CardModule {
}
