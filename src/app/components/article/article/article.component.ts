import {Component, Input} from '@angular/core';
import {ArticleType} from '../../../model/_generated/graphql.schema';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  @Input() public article: ArticleType;
}
