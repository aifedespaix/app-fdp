import {Component, HostListener, Inject, OnDestroy, OnInit, PLATFORM_ID} from '@angular/core';
import {ArticleType, PictureType} from '../../../model/_generated/graphql.schema';
import {Metas} from '../../../seo/seo-head/seo-head';
import {SeoHeadService} from '../../../seo/seo-head/seo-head.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {getUndefinedPictureMock} from '../../../model/picture/tests/picture.mocks';
import {LayoutService} from '../../../layout/layout.service';
import {ArticleModelService} from '../../../model/article/article-model.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
})
export class ArticleFormComponent implements OnInit, OnDestroy {

  public article: ArticleType;
  public markdown: string;
  public isSaved: boolean;

  constructor(
    private readonly headService: SeoHeadService,
    private readonly articleModelService: ArticleModelService,
    private readonly layoutService: LayoutService,
    private readonly router: Router,
    @Inject(PLATFORM_ID) private readonly platformId: object,
  ) {
    this.article = new ArticleType();
    this.article.thumbnail = getUndefinedPictureMock();
    this.isSaved = false;
  }

  @HostListener('window:beforeunload')
  canDeactivate(): Observable<boolean> | boolean {
    return this.isSaved;
  }

  ngOnInit() {
    this.headService.setHead(
      new Metas(
        'Rédiger un article',
        'Rédiger un article',
        `Encore un article à la con`,
        'clapette',
        this.router.url,
      ),
    );
    this.layoutService.footerVisibility(false);
  }

  ngOnDestroy(): void {
    this.layoutService.footerVisibility(true);
  }

  public setPicture(picture: PictureType) {
    this.article.thumbnail = picture;
  }

  public createArticle() {
    this.articleModelService
      .createArticle(this.article)
      .subscribe((article) => {
        console.log(article);
      });
  }

  public isSubmitable() {
    return (
      this.article.title
      && this.article.description
      && this.article.tags
      && this.article.tags.length
      && this.article.thumbnail
      && this.article.thumbnail.images
      && this.article.thumbnail.images.length
      && this.article.content
      && this.article.content.length > 250
    );
  }
}
