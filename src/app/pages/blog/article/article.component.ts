import {Component, Input, OnInit} from '@angular/core';
import {ArticleType} from '../../../model/_generated/graphql.schema';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() public article: ArticleType;

  constructor() { }

  ngOnInit() {
  }

}
