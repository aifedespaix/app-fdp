import {Component, Input, OnInit} from '@angular/core';
import {CategoryType} from '../../../model/_generated/graphql.schema';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input() category: CategoryType;

  constructor() { }

  ngOnInit() {
  }

}
