import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CategoryInput, CategoryType, PictureType} from '../../../model/_generated/graphql.schema';
import {getUndefinedPictureMock} from '../../../model/picture/picture.mocks';
import {CategoryModelService} from '../../../model/category/category-model.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent implements OnInit, OnChanges {

  @Input() category: CategoryType;
  public categoryInput: CategoryInput;
  public picture: PictureType;

  constructor(
    private readonly categoryModelService: CategoryModelService,
  ) {
    this.categoryInput = new CategoryInput();
    this.category = new CategoryType();
    this.categoryInput.description = '';
    this.categoryInput.name = '';
    this.picture = getUndefinedPictureMock();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.categoryInput.name = this.category.name;
    this.categoryInput.description = this.category.description;
    if (this.category.picture) {
      this.picture = this.category.picture;
      if (this.category.picture.id) {
        this.categoryInput.pictureId = this.category.picture.id;
      }
    }
  }

  ngOnInit() {
  }

  submit() {
    if (this.category.id) {
      this.update();
    } else {
      this.create();
    }
  }

  update() {
    this.categoryModelService
      .update({
        id: this.category.id,
        ...this.categoryInput,
      })
      .subscribe((category) => {
        this.category = category;
      });
  }

  create() {
    this.categoryModelService
      .createCategory({
        ...this.categoryInput,
        pictureId: this.picture.id,
      })
      .subscribe((category) => {
        this.category = category;
      });
  }
}
