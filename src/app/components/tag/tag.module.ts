import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagFieldComponent } from './tag-field/tag-field.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {TagModelService} from '../../model/tag/tag-model.service';

@NgModule({
  declarations: [
    TagFieldComponent,
  ],
  exports: [
    TagFieldComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
  ],
  providers: [
    TagModelService,
  ]
})
export class TagModule { }
