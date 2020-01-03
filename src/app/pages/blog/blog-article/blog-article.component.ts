import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ArticleModelService} from '../../../model/article/article-model.service';
import {ArticleType} from '../../../model/_generated/graphql.schema';
import {Metas} from '../../../services/seo-head';
import {PageService} from '../../../services/page/page.service';
import {Logo} from '../../../services/layout/logo';
import {StringService} from '../../../services/string.service';

@Component({
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.scss'],
})
export class BlogArticleComponent implements OnInit {

  public article: ArticleType;
  public isLoading: boolean;

  constructor(
    private readonly router: Router,
    private readonly pageService: PageService,
    private readonly route: ActivatedRoute,
    private readonly articleModelService: ArticleModelService,
    public readonly stringService: StringService,
  ) {
    this.isLoading = false;
    this.pageService.layout(true, Logo.Aife);
  }

  ngOnInit() {
    this.loadArticle();
  }

  private loadArticle() {
    this.isLoading = true;
    this.articleModelService
      .article(this.route.snapshot.paramMap.get('id'))
      .subscribe(async (article) => {
          const url = this.router.serializeUrl(this.router.createUrlTree(['/blog/articles', article.id, this.stringService.forUrl(article.title)]));
          if (this.router.url !== url) {
            await this.router.navigateByUrl(url);
          }
          this.article = article;
          this.updateHead();
          this.isLoading = false;
        },
        async () => {
          await this.router.navigateByUrl('/404');
          this.isLoading = false;
        },
      );
  }

  private updateHead() {
    this.pageService.metas(
      new Metas(
        this.article.title,
        'Blog',
        this.article.description,
        this.article.author.login,
        this.router.url,
        {
          url: this.article.thumbnail.images[0].url,
          secureUrl: this.article.thumbnail.images[0].url,
          type: this.article.thumbnail.images[0].mimetype,
          width: this.article.thumbnail.images[0].width,
          height: this.article.thumbnail.images[0].height,
          alt: this.article.description,
        },
        {
          article: {
            author: this.article.author.login,
            tags: this.article.tags.map((t) => t.value),
            publishedTime: new Date(this.article.createdAt),
            modifiedTime: new Date(this.article.updatedAt),
            section: 'web',
            expirationTime: null,
          },
        },
      ),
    );
  }
}
