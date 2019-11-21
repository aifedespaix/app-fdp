import { Component, OnInit } from '@angular/core';
import {ArticleType, PictureType} from '../../../model/graphql.schema';

@Component({
  selector: 'app-new-article',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {

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
