import {Component, Input, OnInit} from '@angular/core';
import {ArticleType} from '../../model/graphql';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() private readonly article: ArticleType;

  constructor() { }

  ngOnInit() {
  }

}
