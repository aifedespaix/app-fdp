import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ArticleModelService} from '../../../model/article/article-model.service';
import {ArticleType} from '../../../model/_generated/graphql.schema';
import {Metas} from '../../../services/seo-head';
import {SeoHeadService} from '../../../services/seo-head.service';

@Component({
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.scss'],
})
export class BlogArticleComponent implements OnInit {

  public article: ArticleType;
  public isLoading: boolean;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly articleModelService: ArticleModelService,
    private readonly seoHeadService: SeoHeadService,
  ) {
    this.isLoading = false;
  }

  ngOnInit() {
    this.loadArticle();
  }

  private loadArticle() {
    this.isLoading = true;
    this.articleModelService
      .article(this.route.snapshot.paramMap.get('id'))
      .subscribe(async (article) => {
          const url = this.router.serializeUrl(this.router.createUrlTree(['/blog/articles', article.id, article.title]));
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
    this.seoHeadService.setHead(
      new Metas(
        this.article.title,
        this.article.title,
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
          }
        },
      ),
    );
  }
}
