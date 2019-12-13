import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ArticleInput, ArticleType} from '../../../model/_generated/graphql.schema';
import {ArticleModelService} from '../../../model/article/article-model.service';
import {SnackService} from '../../../services/snack/snack.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
})
export class ArticleFormComponent implements OnInit {

  @Input() public article: ArticleType;
  @Output() public saved: EventEmitter<boolean>;

  constructor(
    private readonly articleModelService: ArticleModelService,
    private readonly snackService: SnackService,
  ) {
    this.saved = new EventEmitter<boolean>();
  }

  ngOnInit() {
  }

  public submit() {
    if (this.article.id) {
      this.update();
    } else {
      this.create();
    }
  }

  public isSubmitable() {
    return (
      this.article.title
      && this.article.description
      && this.article.tags
      && this.article.tags.length
      && this.article.category
      && this.article.category.id
      && this.article.thumbnail
      && this.article.thumbnail.id
      && this.article.content
      && this.article.content.length > 250
    );
  }

  public submitLabel() {
    return this.article.id ? `Mettre à jour l'article` : `Créer l'article`;
  }

  private create() {
    this.articleModelService
      .createArticle(this.getInput())
      .subscribe((article) => {
        this.article = article;
        this.saved.emit(true);
        this.snackService.success(`L'article a bien été créé`);
      });
  }

  private update() {
    this.articleModelService
      .updateArticle({...this.getInput(), id: this.article.id})
      .subscribe((article) => {
        this.article = article;
        this.saved.emit(true);
        this.snackService.success(`L'article a bien été mis à jour`);
      });
  }

  private getInput(): ArticleInput {
    return {
      title: this.article.title,
      description: this.article.description,
      content: this.article.content,
      tags: this.article.tags,
      thumbnailId: this.article.thumbnail.id,
      categoryId: this.article.category.id,
    };
  }
}
