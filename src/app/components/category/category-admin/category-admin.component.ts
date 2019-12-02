import { Component, OnInit } from '@angular/core';
import {CategoryType} from '../../../model/_generated/graphql.schema';
import {CategoryModelService} from '../../../model/category/category-model.service';

@Component({
  selector: 'app-category-admin',
  templateUrl: './category-admin.component.html',
  styleUrls: ['./category-admin.component.scss']
})
export class CategoryAdminComponent implements OnInit {

  public category: CategoryType;

  constructor(
    private readonly categoryModelService: CategoryModelService,
  ) { }

  ngOnInit() {
  }

  public deleteCategory(id: string) {
    this.categoryModelService.delete(id).subscribe(
      () => {
        this.category = null;
      }
    );
  }
}
