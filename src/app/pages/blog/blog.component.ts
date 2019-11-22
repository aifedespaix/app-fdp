import {Component, Inject, OnDestroy, OnInit, PLATFORM_ID} from '@angular/core';
import {Metas} from '../../seo/seo-head/seo-head';
import {SeoHeadService} from '../../seo/seo-head/seo-head.service';
import {Router} from '@angular/router';
import {ArticleModelService} from '../../model/article/article-model.service';
import {Subscription} from 'rxjs';
import {ArticleType} from '../../model/_generated/graphql.schema';
import {getArticlesMock} from '../../model/article/tests/article.mocks';
import {AuthService} from '../../auth/auth.service';
import {BlogRoutes} from './blog-routes';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit, OnDestroy {

  public articles: ArticleType[];
  private articles$: Subscription;

  constructor(
    private readonly headService: SeoHeadService,
    private readonly router: Router,
    private readonly articleModelService: ArticleModelService,
    public readonly authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {
    this.articles = [];
  }

  ngOnInit() {
    this.headService.setHead(
      new Metas(
        'Un blog technique pour apprendre à dev ou comprendre des trucs',
        'Blog',
        // tslint:disable-next-line:max-line-length
        `Un blog technique pour apprendre plein de choses dans le domaine du web moderne. Javascript, nodejs, Typescript, il y a de tout !`,
        'clapette',
        this.router.url,
      ),
    );

    this.articles$ = this.articleModelService.articles({first: 10})
      .subscribe((articles) => {
          this.articles = articles;
        },
        (err) => {
          console.log('use mocks');
          this.articles = getArticlesMock();
        });
  }

  ngOnDestroy(): void {
    this.articles$.unsubscribe();
  }

  getRouteWrite() {
    return BlogRoutes.Write;
  }
}
