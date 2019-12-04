import {Component, Inject, OnDestroy, OnInit, PLATFORM_ID} from '@angular/core';
import {Metas} from '../../../services/seo-head';
import {SeoHeadService} from '../../../services/seo-head.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ArticleModelService} from '../../../model/article/article-model.service';
import {Subscription} from 'rxjs';
import {ArticleType} from '../../../model/_generated/graphql.schema';
import {getArticlesMock} from '../../../model/article/tests/article.mocks';
import {AuthService} from '../../../services/auth.service';
import {BlogRoutes} from '../blog-routes';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit, OnDestroy {

  public articles: ArticleType[];
  public isLoading: boolean;
  private articles$: Subscription;

  constructor(
    private readonly seoHeadService: SeoHeadService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly articleModelService: ArticleModelService,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {
    this.articles = [];
    this.isLoading = false;
  }

  ngOnInit() {
    this.updateHead();
    this.loadArticles();
  }

  ngOnDestroy(): void {
    this.articles$.unsubscribe();
  }

  public getRouteWrite() {
    return BlogRoutes.Write;
  }

  private updateHead() {
    this.seoHeadService.setHead(
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
