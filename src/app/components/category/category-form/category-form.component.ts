import { Component, OnInit } from '@angular/core';
import {CategoryInput, PictureType} from '../../../model/_generated/graphql.schema';
import {getUndefinedPictureMock} from '../../../model/picture/tests/picture.mocks';
import {CategoryModelService} from '../../../model/category/category-model.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  public categoryInput: CategoryInput;
  public picture: PictureType;

  constructor(
    private readonly categoryModelService: CategoryModelService,
  ) {
    this.categoryInput = new CategoryInput();
    this.categoryInput.description = 'Angular est un framework front end permettant de développer des applications modernes';
    this.categoryInput.name = 'Angular';
    this.picture = getUndefinedPictureMock();
  }

  ngOnInit() {
  }


  create() {
    this.categoryModelService
      .createCategory({
        ...this.categoryInput,
        pictureId: this.picture.id
      })
      .subscribe((category) => {
        console.log(category);
      });
  }
}
