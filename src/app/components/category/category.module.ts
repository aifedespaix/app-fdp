import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryFieldComponent } from './category-field/category-field.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CategoryModelService} from '../../model/category/category-model.service';
import { CategoryFormComponent } from './category-form/category-form.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {PictureLibraryModule} from '../picture-library/picture-library.module';
import {PictureModule} from '../picture/picture.module';

@NgModule({
  declarations: [
    CategoryFieldComponent,
    CategoryFormComponent
  ],
  exports: [
    CategoryFieldComponent,
    CategoryFormComponent,
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
  ],
  providers: [
    CategoryModelService,
  ]
})
export class CategoryModule { }
