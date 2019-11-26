import {Component, Input, OnInit} from '@angular/core';
import {ArticleType} from '../../../model/_generated/graphql.schema';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {

  @Input() article: ArticleType;

  constructor() { }

  ngOnInit() {
  }

}
