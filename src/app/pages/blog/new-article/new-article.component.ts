import { Component, OnInit } from '@angular/core';
import {ArticleType, PictureType} from '../../../model/graphql.schema';

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
    this.article.thumbnail = new PictureType();
  }

  ngOnInit() {
  }

  setPicture(picture: PictureType) {
    this.article.thumbnail = picture;
  }

}
