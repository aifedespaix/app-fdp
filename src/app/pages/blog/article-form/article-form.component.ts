import {Component, Inject, OnDestroy, OnInit, PLATFORM_ID} from '@angular/core';
import {ArticleType, PictureType} from '../../../model/_generated/graphql.schema';
import {Metas} from '../../../services/seo-head';
import {SeoHeadService} from '../../../services/seo-head.service';
import {Router} from '@angular/router';
import {getUndefinedPictureMock} from '../../../model/picture/tests/picture.mocks';
import {LayoutService} from '../../../services/layout.service';
import {ArticleModelService} from '../../../model/article/article-model.service';
import {ComponentCanDeactivate} from '../../../guards/pending-changes.guard';

@Component({
  selector: 'app-new-article',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
})
export class ArticleFormComponent implements OnInit, OnDestroy, ComponentCanDeactivate {

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
    layoutService.footerVisibility(false);
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
  }

  ngOnDestroy(): void {
    this.layoutService.footerVisibility(true);
  }

  canDeactivate(): boolean {
    return this.isSaved;
  }

  public setPicture(picture: PictureType) {
    this.article.thumbnail = picture;
  }

  public createArticle() {
    this.articleModelService
      .createArticle(this.article)
      .subscribe((article) => {
        this.isSaved = true;
        this.router.navigate(['../articles', article.id, article.title]);
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
