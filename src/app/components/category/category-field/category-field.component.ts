import {Component, EventEmitter, forwardRef, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {CategoryType} from '../../../model/_generated/graphql.schema';
import {CategoryModelService} from '../../../model/category/category-model.service';

@Component({
  selector: 'app-category-field',
  templateUrl: './category-field.component.html',
  styleUrls: ['./category-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CategoryFieldComponent),
      multi: true,
    },
  ],
})
export class CategoryFieldComponent implements OnInit, ControlValueAccessor {

  private onChange: any;
  private categories: CategoryType[];

  constructor(
    private readonly categoryModelService: CategoryModelService,
  ) {
    this.categories = [];
  }

  ngOnInit() {
    this.loadCategories();
  }


  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
  }

  private loadCategories() {
    this.categoryModelService
      .categories({})
      .subscribe((categories) => {
        this.categories = categories;
      });
  }

  public changeCategory(category: any) {
    console.log(category);
    // this.categoryChange.emit()
  }
}
