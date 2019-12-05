import {Component, OnDestroy, OnInit} from '@angular/core';
import {ArticleInput, ArticleType, CategoryType, PictureType} from '../../../model/_generated/graphql.schema';
import {Metas} from '../../../services/seo-head';
import {SeoHeadService} from '../../../services/seo-head.service';
import {ActivatedRoute, Router} from '@angular/router';
import {getUndefinedPictureMock} from '../../../model/picture/picture.mocks';
import {LayoutService} from '../../../services/layout.service';
import {ArticleModelService} from '../../../model/article/article-model.service';
import {ComponentCanDeactivate} from '../../../guards/pending-changes.guard';
import {AuthService} from '../../../services/auth.service';
import {SnackService} from '../../../services/snack/snack.service';

@Component({
  templateUrl: './blog-article-form.component.html',
  styleUrls: ['./blog-article-form.component.scss'],
})
export class BlogArticleFormComponent implements OnInit, OnDestroy, ComponentCanDeactivate {

  public id: string;
  public articleInput: ArticleInput;
  public markdown: string;
  public isSaved: boolean;
  public thumbnail: PictureType;
  public category: CategoryType;

  constructor(
    private readonly snackService: SnackService,
    private readonly headService: SeoHeadService,
    private readonly articleModelService: ArticleModelService,
    private readonly layoutService: LayoutService,
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) {
    this.id = null;
    this.articleInput = new ArticleInput();
    this.thumbnail = getUndefinedPictureMock();
    this.isSaved = false;
    layoutService.footerVisibility(false);
  }


  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.loadArticle();
    }
    this.headService.setHead(
      new Metas(
        'Rédiger un article',
        'Rédiger un article',
        `Encore un article à la con`,
        'clapette',
        this.router.url,
      ),
    );
  }

  ngOnDestroy(): void {
    this.layoutService.footerVisibility(true);
  }

  canDeactivate(): boolean {
    return this.isSaved;
  }

  public setPicture(picture: PictureType) {
    this.thumbnail = picture;
    this.articleInput.thumbnailId = picture.id;
  }

  public submitArticle() {
    if (this.id) {
      this.updateArticle();
    } else {
      this.createArticle();
    }
  }

  public isSubmitable() {
    return (
      this.articleInput.title
      && this.articleInput.description
      && this.articleInput.tags
      && this.articleInput.tags.length
      && this.articleInput.thumbnailId
      && this.thumbnail
      && this.thumbnail.images
      && this.thumbnail.images.length
      && this.articleInput.content
      && this.articleInput.content.length > 250
    );
  }

  public getArticle(): ArticleType {
    return {
      title: this.articleInput.title,
      description: this.articleInput.description,
      updatedAt: new Date(),
      createdAt: new Date(),
      category: null,
      thumbnail: this.thumbnail,
      author: this.authService.user,
      tags: this.articleInput.tags,
      id: 'create',
      content: this.articleInput.content,
      comments: [],
      likes: [],
      published: false,
    };
  }

  public submitLabel() {
    return this.id ? `Mettre à jour l'article` : `Créer l'article`;
  }

  private createArticle() {
    this.articleInput.categoryId = this.category.id;
    this.articleModelService
      .createArticle(this.articleInput)
      .subscribe((article) => {
        this.isSaved = true;
        this.id = article.id;
        this.snackService.success(`L'article a bien été créé`);
      });
  }

  private updateArticle() {
    this.articleModelService
      .updateArticle({...this.articleInput, id: this.id})
      .subscribe(() => {
        this.isSaved = true;
        this.snackService.success(`L'article a bien été mis à jour`);
      });
  }

  private loadArticle() {
    const sub = this.articleModelService
      .article(this.id)
      .subscribe(
        (article) => {
          this.articleInput.title = article.title;
          this.articleInput.description = article.description;
          this.articleInput.content = article.content;
          this.articleInput.tags = article.tags;

          this.thumbnail = article.thumbnail;
          this.articleInput.thumbnailId = article.thumbnail.id;
          this.category = article.category;
          this.articleInput.categoryId = article.category.id;

          sub.unsubscribe();
        },
        () => {
          this.id = null;
          this.snackService.error(`L'article n'a pas pu être chargé : vous éditez un nouvel article.`);

        },
      );
  }
}
