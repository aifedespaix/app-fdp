import {Component, HostListener, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {ArticleType, PictureType} from '../../../model/_generated/graphql.schema';
import {Metas} from '../../../seo/seo-head/seo-head';
import {SeoHeadService} from '../../../seo/seo-head/seo-head.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {MatDialog} from '@angular/material';
import {PictureLibraryDialogComponent} from '../../../components/picture-library/picture-library/picture-library-dialog.component';
import {getUndefinedPictureMock} from '../../../model/picture/tests/picture.mocks';

@Component({
  selector: 'app-new-article',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
})
export class ArticleFormComponent implements OnInit {

  public article: ArticleType;
  public markdown: string;
  public isSaved: boolean;

  constructor(
    private readonly headService: SeoHeadService,
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
        // tslint:disable-next-line:max-line-length
        `Encore un article à la con`,
        'clapette',
        this.router.url,
      ),
    );
  }

  setPicture(picture: PictureType) {
    console.log(picture);
    this.article.thumbnail = picture;
  }

}
