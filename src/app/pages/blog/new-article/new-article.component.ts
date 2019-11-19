import { Component, OnInit } from '@angular/core';
import {ArticleInput} from '../../../model/graphql.schema';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss']
})
export class NewArticleComponent implements OnInit {

  public articleInput: ArticleInput;
  public markdown: string;

  constructor() {
    this.articleInput = new ArticleInput();
  }

  ngOnInit() {
  }

}
