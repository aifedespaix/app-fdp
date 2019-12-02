import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryFieldComponent} from './category-field/category-field.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CategoryModelService} from '../../model/category/category-model.service';
import {CategoryFormComponent} from './category-form/category-form.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {PictureLibraryModule} from '../picture-library/picture-library.module';
import {PictureModule} from '../picture/picture.module';
import {CategoryComponent} from './category/category.component';
import {CategoryAdminComponent} from './category-admin/category-admin.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    CategoryFieldComponent,
    CategoryFormComponent,
    CategoryComponent,
    CategoryAdminComponent,
  ],
  exports: [
    CategoryFieldComponent,
    CategoryFormComponent,
    CategoryComponent,
    CategoryAdminComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    PictureLibraryModule,
    PictureModule,
    MatTooltipModule,
    MatIconModule,
  ],
  providers: [
    CategoryModelService,
  ],
})
export class CategoryModule {
}
