import {Component, forwardRef, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {CategoryType} from '../../../model/_generated/graphql.schema';
import {CategoryModelService} from '../../../model/category/category-model.service';
import {MatSelectChange} from '@angular/material';
import {Subscription} from 'rxjs';
import {trigger} from '@angular/animations';
import {slideRightAnimation} from '../../../animations/slide-right.animation';
import {slideLeftAnimation} from '../../../animations/slide-left.animation';
import {slideTopAnimation} from '../../../animations/slide-top.animation';
import {slideBottomAnimation} from '../../../animations/slide-bottom.animation';

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

  private onChange: any;
  public categories: CategoryType[];
  private $categories: Subscription;

  constructor(
    private readonly categoryModelService: CategoryModelService,
  ) {
    this.categories = [];
  }

  ngOnInit() {
    this.loadCategories();
  }

  ngOnDestroy(): void {
    this.$categories.unsubscribe();
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
    this.$categories = this.categoryModelService
      .categories({})
      .subscribe((categories) => {
        this.categories = categories;
      });
  }

  public changeCategory(change: MatSelectChange) {
    this.onChange(change.value);
  }
}
