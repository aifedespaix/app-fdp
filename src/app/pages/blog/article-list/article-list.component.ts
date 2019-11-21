import {Component, Input, OnInit} from '@angular/core';
import {ArticleType} from '../../../model/graphql.schema';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  @Input() public articles: ArticleType[];

  constructor() { }

  ngOnInit() {
  }

}
