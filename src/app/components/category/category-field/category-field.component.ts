import {Component, forwardRef, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {CategoryType} from '../../../model/_generated/graphql.schema';
import {CategoryModelService} from '../../../model/category/category-model.service';
import {MatSelectChange} from '@angular/material';
import {Subscription} from 'rxjs';

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
export class CategoryFieldComponent implements OnInit, ControlValueAccessor, OnDestroy {

  public category: CategoryType;
  public categories: CategoryType[];
  private onChange: (value: CategoryType) => void;
  private $categories: Subscription;

  constructor(
    private readonly categoryModelService: CategoryModelService,
  ) {
    this.category = new CategoryType();
    this.categories = [];
  }

  ngOnInit() {
    this.loadCategories();
  }

  ngOnDestroy(): void {
    this.$categories.unsubscribe();
  }

  registerOnChange(fn: (value: CategoryType) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(value: CategoryType): void {
    if (value) {
      this.category = value;
    }
  }

  public changeCategory(change: MatSelectChange) {
    this.category = this.categories.find((category) => category.id === change.value);
    this.onChange(this.category);
  }

  private loadCategories() {
    this.$categories = this.categoryModelService
      .categories({})
      .subscribe((categories) => {
        this.categories = categories;
      });
  }
}
