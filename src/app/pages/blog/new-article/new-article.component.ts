import { Component, OnInit } from '@angular/core';
import {ArticleInput, ArticleType} from '../../../model/graphql.schema';
import {getResourceMock} from '../../../model/resource/tests/resource.mock';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss']
})
export class NewArticleComponent implements OnInit {

  public article: ArticleType;
  public markdown: string;

  constructor() {
    this.article = new ArticleType();
    this.article.thumbnail = getResourceMock();
  }

  ngOnInit() {
  }

}
