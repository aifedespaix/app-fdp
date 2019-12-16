import {Component, Inject, OnDestroy, OnInit, PLATFORM_ID} from '@angular/core';
import {Metas} from '../../../services/seo-head';
import {Router} from '@angular/router';
import {ArticleModelService} from '../../../model/article/article-model.service';
import {Subscription} from 'rxjs';
import {ArticleType} from '../../../model/_generated/graphql.schema';
import {getArticlesMock} from '../../../model/article/article.mocks';
import {PageService} from '../../../services/page/page.service';
import {Logo} from '../../../services/layout/logo';

@Component({
  templateUrl: './blog-index.component.html',
  styleUrls: ['./blog-index.component.scss'],
})
export class BlogIndexComponent implements OnInit, OnDestroy {

  public articles: ArticleType[];
  public isLoading: boolean;
  protected metas: Metas;
  private articles$: Subscription;

  constructor(
    private readonly pageService: PageService,
    private readonly router: Router,
    private readonly articleModelService: ArticleModelService,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {
    this.articles = [];
    this.isLoading = false;
    pageService.layout(true, Logo.Aife);
  }


  ngOnInit() {
    this.updateHead();
    this.loadArticles();
  }

  ngOnDestroy(): void {
    this.articles$.unsubscribe();
  }

  private updateHead() {
    this.pageService.metas(
      new Metas(
        'Un blog technique pour apprendre à dev ou comprendre des trucs',
        'Blog',
        // tslint:disable-next-line:max-line-length
        `Un blog technique pour apprendre plein de choses dans le domaine du web moderne. Javascript, nodejs, Typescript, graphql, c'est grave cool !`,
        'clapette',
        this.router.url,
      ),
    );
  }

  private loadArticles() {
    this.isLoading = true;
    this.articles$ = this.articleModelService
      .articles({first: 10})
      .subscribe(
        (articles) => {
          this.articles = articles;
          this.isLoading = false;
        },
        () => {
          this.articles = getArticlesMock();
          this.isLoading = false;
        },
      );
  }
}
