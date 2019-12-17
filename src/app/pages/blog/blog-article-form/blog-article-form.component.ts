import {Component, OnInit} from '@angular/core';
import {ArticleType, CategoryType, PictureType} from '../../../model/_generated/graphql.schema';
import {Metas} from '../../../services/seo-head';
import {ActivatedRoute, Router} from '@angular/router';
import {getUndefinedPictureMock} from '../../../model/picture/picture.mocks';
import {ComponentCanDeactivate} from '../../../guards/pending-changes.guard';
import {SnackService} from '../../../services/snack/snack.service';
import {ArticleModelService} from '../../../model/article/article-model.service';
import {PageService} from '../../../services/page/page.service';
import {Logo} from '../../../services/layout/logo';

@Component({
  templateUrl: './blog-article-form.component.html',
  styleUrls: ['./blog-article-form.component.scss'],
})
export class BlogArticleFormComponent implements OnInit, ComponentCanDeactivate {

  public article: ArticleType;
  public markdown: string;
  public isSaved: boolean;

  public thumbnail: PictureType;
  public category: CategoryType;

  constructor(
    private readonly pageService: PageService,
    private readonly snackService: SnackService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly articleModelService: ArticleModelService,
  ) {
    this.article = new ArticleType();
    this.isSaved = false;
    this.thumbnail = getUndefinedPictureMock();
    pageService.layout(false, Logo.Aife);
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadArticle(id);
    }
    this.setMetas();
  }

  canDeactivate(): boolean {
    return this.isSaved;
  }

  private setMetas() {
    this.pageService.metas(
      new Metas(
        'Rédiger un article',
        'Rédiger un article',
        `Encore un article à la con`,
        'clapette',
        this.router.url,
      ),
    );
  }

  private loadArticle(id: string) {
    const sub = this.articleModelService
      .article(id)
      .subscribe(
        (article) => {
          this.article = article;
          sub.unsubscribe();
        },
        () => {
          this.article.id = null;
          this.snackService.error(`L'article n'a pas pu être chargé : vous éditez un nouvel article.`);
        },
      );
  }
}
