import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {PictureModule} from '../../components/picture/picture.module';
import {LoadingModule} from '../../components/loading/loading.module';
import {PictureLibraryModule} from '../../components/picture-library/picture-library.module';
import {CardModule} from '../../components/card/card.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ArticleModule} from '../../components/article/article.module';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    LoadingModule,
    PictureModule,
    PictureLibraryModule,
    CardModule,
    MatCheckboxModule,
    ArticleModule,
  ],
})
export class ProfileModule { }
