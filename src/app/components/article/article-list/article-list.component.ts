import {Component, Input, OnInit} from '@angular/core';
import {ArticleType} from '../../../model/_generated/graphql.schema';
import {Router} from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent {
  @Input() public articles: ArticleType[];
}
