import {Component, OnDestroy, OnInit} from '@angular/core';
import {ArticleType, CategoryType, PictureType} from '../../../model/_generated/graphql.schema';
import {Metas} from '../../../services/seo-head';
import {SeoHeadService} from '../../../services/seo-head.service';
import {ActivatedRoute, Router} from '@angular/router';
import {getUndefinedPictureMock} from '../../../model/picture/picture.mocks';
import {LayoutService} from '../../../services/layout.service';
import {ComponentCanDeactivate} from '../../../guards/pending-changes.guard';
import {AuthService} from '../../../services/auth.service';
import {SnackService} from '../../../services/snack/snack.service';
import {ArticleModelService} from '../../../model/article/article-model.service';

@Component({
  templateUrl: './blog-article-form.component.html',
  styleUrls: ['./blog-article-form.component.scss'],
})
export class BlogArticleFormComponent implements OnInit, OnDestroy, ComponentCanDeactivate {

  public article: ArticleType;
  public markdown: string;
  public isSaved: boolean;

  public thumbnail: PictureType;
  public category: CategoryType;

  constructor(
    private readonly snackService: SnackService,
    private readonly headService: SeoHeadService,
    private readonly layoutService: LayoutService,
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly articleModelService: ArticleModelService,
  ) {
    this.article = new ArticleType();
    this.isSaved = false;
    this.thumbnail = getUndefinedPictureMock();
    layoutService.footerVisibility(false);
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadArticle(id);
    } else {
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
