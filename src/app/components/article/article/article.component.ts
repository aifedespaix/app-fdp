import {Component, Input} from '@angular/core';
import {ArticleType} from '../../../model/_generated/graphql.schema';
import {CommentModelService} from '../../../model/comment/comment-model.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  @Input() public article: ArticleType;

  constructor(
    private readonly commentModelService: CommentModelService,
  ) {
  }

  public addNewComment(value: string) {
    this.commentModelService
      .createArticleComment({value, target: this.article.id})
      .subscribe((comment) => {
        this.article.comments.push(comment);
      });
  }
}
